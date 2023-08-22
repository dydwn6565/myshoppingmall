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

function Order() {
  const navigate = useNavigate();
  const [userLogin, loading] = useAuthState(auth);
  const { state } = useLocation();

  const [recipient, setRecipient] = useState("");
  const [cellphoneNumber, setCellphoneNumber] = useState(0);
  const [addressone, setAddressone] = useState("");
  const [addresstwo, setAddresstwo] = useState("");
  const [memo, setMemo] = useState("");
  const [nationality, setNationality] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");

  const [errorsRecipient, setErrorsRecipient] = useState("");
  const [errorsCellphone, setErrorsCellphone] = useState("");
  const [errorsAddressone, setErrorsAddressone] = useState("");
  const [errorsAddresstwo, setErrorsAddresstwo] = useState("");
  const [errorsNationality, setErrorsNationality] = useState("");
  const [errorsProvince, setErrorsProvince] = useState("");
  const [errorsCity, setErrorsCity] = useState("");
  const [errorsPostalcode, setErrorsPostalcode] = useState("");

  const elements = useElements();
  const stripe = useStripe();
  const phoneRegex = /\(\d{3}\)\s*\d{3}-\d{4}/;

  const checkInputValidation = () => {
    if (recipient === "") {
      setErrorsRecipient("please type recipient");
    } else {
      setErrorsRecipient("");
    }
    
    if (!phoneRegex.test(cellphoneNumber.phone)) {
      console.log(cellphoneNumber);

      setErrorsCellphone("please type proper phone number");
    } else {
      setErrorsCellphone("");
    }

    if (addressone === "") {
      setErrorsAddressone("Please type address one");
    } else {
      setErrorsAddressone("");
    }
    if (addresstwo === "") {
      setErrorsAddresstwo("Please type address two");
    } else {
      setErrorsAddresstwo("");
    }
    if (nationality === "") {
      setErrorsNationality("Please type nationality");
    } else {
      setErrorsNationality("");
    }
    if (province === "") {
      setErrorsProvince("Please type province");
    } else {
      setErrorsProvince("");
    }
    if (city === "") {
      setErrorsCity("Please type city");
    } else {
      setErrorsCity("");
    }
    if (postalcode === "") {
      setErrorsPostalcode("Please type postalcode");
    } else {
      setErrorsPostalcode("");
    }
  };

  async function handleToken(e) {
    if (!stripe || !elements) {
      return;
    }

    checkInputValidation();

    if (
      recipient !== "" &&
      cellphoneNumber !== "" &&
      addressone !== "" &&
      addresstwo !== "" &&
      nationality !== "" &&
      province !== "" &&
      city !== "" &&
      postalcode !== "" &&
      phoneRegex.test(cellphoneNumber.phone)
    ) {
      try {
        await fetch("https://clothes-api.vercel.app/api/items/checkout", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": " Content-Type, X-Auth-Token",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
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
                nationality: nationality,
                provice: province,
                city: city,
                postalcode: postalcode,
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
  };

  const handleOnChangeRecipients = (value) => {
    setRecipient(value);
  };
  const autoComplete = () => {
    setRecipient("Yong");
    setAddressone("111 Main St");
    setAddresstwo(".");
    setNationality("Canada");
    setProvince("BC");
    setCity("Vancouver");
    setPostalcode("E2X 3O2");
    setMemo("Please deliver safely");
    console.log(cellphoneNumber);
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
            <div className=" ">
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Recipient"
                  variant="filled"
                  required
                  value={recipient}
                  error={errorsRecipient}
                  helperText={errorsRecipient}
                  sx={{ m: 1, width: "215px"  }}
                  onChange={(e) => handleOnChangeRecipients(e.target.value)}
                />

                <div>
                  <MuiPhoneNumber
                    defaultCountry={"ca"}
                    onChange={handleOnChangePhoneNumber}
                    required
                    value={"+1 (778) 870-6251"}
                    error={errorsCellphone}
                    helperText={errorsCellphone}
                    sx={{ m: 1 }}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Your address line one"
                    variant="filled"
                    required
                    error={errorsAddressone}
                    value={addressone}
                    helperText={errorsAddressone}
                    sx={{ m: 1, width: { sm: "215px", md: "450px" } }}
                    onChange={(e) => setAddressone(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Your address line two"
                    variant="filled"
                    required
                    value={addresstwo}
                    error={errorsAddresstwo}
                    helperText={errorsAddresstwo}
                    sx={{ m: 1, width: { xs: "215px", md: "450px" } }}
                    onChange={(e) => setAddresstwo(e.target.value)}
                  />
                </div>

                <TextField
                  id="outlined-multiline-static"
                  label="Nationality"
                  placeholder="Nationality"
                  variant="filled"
                  error={errorsNationality}
                  value={nationality}
                  helperText={errorsNationality}
                  sx={{ m: 1, width: "25ch", mb: "2ch" }}
                  multiline
                  onChange={(e) => setNationality(e.target.value)}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Province"
                  variant="filled"
                  error={errorsProvince}
                  value={province}
                  helperText={errorsProvince}
                  sx={{ m: 1, width: "25ch", mb: "2ch" }}
                  multiline
                  onChange={(e) => setProvince(e.target.value)}
                />
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="City"
                    variant="filled"
                    error={errorsCity}
                    value={city}
                    helperText={errorsCity}
                    sx={{ m: 1, width: "25ch", mb: "2ch" }}
                    multiline
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Postal Code"
                    variant="filled"
                    value={postalcode}
                    error={errorsPostalcode}
                    helperText={errorsPostalcode}
                    sx={{ m: 1, width: "25ch", mb: "2ch" }}
                    multiline
                    onChange={(e) => setPostalcode(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="Memo"
                    variant="filled"
                    value={memo}
                    rows={4}
                    sx={{ m: 1, width: { xs: "215px", md: "450px" } }}
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
                        <span>Price: </span>${" "}
                        {parseFloat(
                          item["discounted_price"] * item["quantity"]
                        ).toFixed(1)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order_page_total_price">
                Total price: ${" "}
                {parseFloat(
                  state["totalPrice"] - state["discountedPrice"]
                ).toFixed(1)}
              </div>
            </div>
            <div className="card_element">
              <Button variant="contained" onClick={(e) => handleToken(e)}>
                Payment
              </Button>
              <Button onClick={autoComplete}>Auto complete </Button>
            </div>
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
