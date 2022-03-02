import React, { useEffect, useState } from "react";
import "./Order.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MuiPhoneNumber from "material-ui-phone-number";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "@mui/material/Button";
import AutoCompletePlace from "./AutoCompletePlace";

function Order() {
  const navigate = useNavigate();
  const [userLogin, loading] = useAuthState(auth);
  const { state } = useLocation();

  const [recipient, setRecipient] = useState("");
  const [cellphoneNumber, setCellphoneNumber] = useState(0);
  const [addressone, setAddressone] = useState("");
  const [addresstwo, setAddresstwo] = useState("");
  const [memo, setMemo] = useState("");

  const [errors, setErrors] = useState({
    recipient: "",
    phone: "",
    addressone: "",
    addresstwo: "",
  });
  const elements = useElements();
  const stripe = useStripe();

  const checkInputValidation = () => {
    if (recipient === "") {
      setErrors({ recipient: "please type recipient" });
    }
    console.log(cellphoneNumber);

    const phoneRegex = /\(\d{3}\)\s*\d{3}-\d{4}/;

    // ).test(cellphoneNumber.phone);
    console.log(phoneRegex.test(cellphoneNumber.phone));
    if (!phoneRegex.test(cellphoneNumber.phone)) {
      setErrors({ phone: "please type proper phone number" });
    }

    if (addressone === "") {
      setErrors({ addressone: "Please type address one" });
    }
    if (addresstwo === "") {
      setErrors({ addresstwo: "Please type address two" });
    }
  };

  async function handleToken(e) {
    if (!stripe || !elements) {
      return;
    }
    // e.preventDefault();
    if (e) {
      checkInputValidation();
    }

    if (
      recipient !== "" &&
      cellphoneNumber !== "" &&
      addressone !== "" &&
      addresstwo !== ""
    ) {
      try {
        await fetch("http://localhost:3001/api/items/checkout", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "access-control-allow-origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: state,
            paymentMethodType: "card",
            currency: "cad",
          }),
        })
          .then((res) => {
            if (res.ok) return res.json();
            return res.json().then((json) => Promise.reject(json));
          })
          .then(({ url }) => {
            window.location = url;
            localStorage.setItem(
              "user_delivery_info",
              JSON.stringify({
                recipient: recipient,
                cellphoneNumber: cellphoneNumber,
                address: addressone + addresstwo,
                memo: memo,
                orderState: state,
              })
            );
          })
          .catch((e) => {
            console.error(e.error);
          });
      } catch (error) {
        alert(error);
      }
    }
  }
  const handleOnChangePhoneNumber = (value) => {
    setCellphoneNumber({
      phone: value,
    });

    console.log(cellphoneNumber);
  };

  const handleOnChangeRecipients = (value) => {
    setRecipient(value);
  };

  useEffect(() => {
    if (JSON.parse(localStorage?.getItem("user_delivery_info"))) {
      localStorage.removeItem("user_delivery_info");
    }
  }, []);

  return (
    <div className="order">
      {userLogin && state ? (
        <>
          <div className="order_payment_head">Order/Payment</div>
          <hr />

          <div className="order_address">
            <div className="recipient_info_head">Recipient Info</div>
            <hr />

            <form
              className="order_address_form"
              // onSubmit={(e) => handleToken(e)}
            >
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Recipient"
                  variant="outlined"
                  required
                  error={errors?.recipient}
                  helperText={errors.recipient}
                  sx={{ m: 1, width: "25ch" }}
                  onChange={(e) => handleOnChangeRecipients(e.target.value)}
                />

                <div>
                  <MuiPhoneNumber
                    defaultCountry={"ca"}
                    onChange={handleOnChangePhoneNumber}
                    required
                    error={errors?.phone}
                    helperText={errors.phone}
                    sx={{ m: 1, width: "25ch", mt: "2ch", mb: "2ch" }}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Your address line one"
                    variant="outlined"
                    required
                    sx={{ m: 1, width: "52ch" }}
                    onChange={(e) => setAddressone(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Your address line two"
                    variant="outlined"
                    required
                    sx={{ m: 1, width: "52ch" }}
                    onChange={(e) => setAddresstwo(e.target.value)}
                  />
                </div>
                {/* <AutoCompletePlace /> */}
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="Memo"
                    variant="outlined"
                    rows={4}
                    sx={{ m: 1, width: "52ch", mb: "2ch" }}
                    multiline
                    onChange={(e) => setMemo(e.target.value)}
                  />
                </div>
              </Box>

              <div className="item_list">
                {state["orderState"].map((item, index) => (
                  <div className="order_item_description">
                    <img src={`${item["image"]}`} alt="" />
                    <div>
                      <p>
                        <span>Brand: </span>
                        {item["brand"]}
                      </p>
                      <p>
                        <span>Name: </span>
                        {item["name"]}
                      </p>
                      <p>
                        <span>Size: </span>
                        {item["size"]["size"]}
                      </p>
                      <p>
                        <span>Quantity: </span>
                        {item["quantity"]}
                      </p>
                      <p>
                        <span>Price: </span>
                        {item["discounted_price"] * item["quantity"]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order_page_total_price">
                Total price: {state["totalPrice"] - state["discountedPrice"]}
              </div>

              <div className="card_element">
                <Button variant="contained" onClick={(e) => handleToken(e)}>
                  Payment
                </Button>
              </div>
            </form>
          </div>
        </>
      ) : loading ? (
        loading
      ) : (
        navigate("/login")
      )}
    </div>
  );
}

export default Order;
