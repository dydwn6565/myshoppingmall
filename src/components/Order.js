import React, { useEffect, useState } from "react";
import "./Order.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import {
  doc,
  getDoc,
  addDoc,
  collection,
  updateDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { v4 as uuid } from "uuid";

import { useElements, useStripe } from "@stripe/react-stripe-js";

function Order() {
  const navigate = useNavigate();
  const [userLogin, loading] = useAuthState(auth);
  const { state, totalPrice, discounted_price } = useLocation();
  const [user, setUser] = useState("");
  const [recipient, setRecipient] = useState("");
  const [cellphoneNumber, setCellphoneNumber] = useState(0);
  const [addressone, setAddressone] = useState("");
  const [addresstwo, setAddresstwo] = useState("");
  const [memo, setMemo] = useState("");
  const uniqueId = uuid();
  const elements = useElements();
  const stripe = useStripe();

  async function handleToken(e, addresses) {
    // e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    console.log(state);
    if (
      recipient !== "" &&
      cellphoneNumber !== "" &&
      addressone !== "" &&
      addresstwo !== ""
    ) {
      const clientSecret = await fetch(
        "http://localhost:3001/api/items/checkout",
        {
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
        }
      )
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

      const results = await stripe
        .confirmCardPayment({
          //`Elements` instance that was used to create the Payment Element
          clientSecret,
        })
        .then(function (result) {
          if (result) {
            console.log(result.error.message);
          }
        });
    }
  }

  useEffect(() => {
    if (JSON.parse(localStorage?.getItem("user_delivery_info"))) {
      localStorage.removeItem("user_delivery_info");
    }
  }, []);

  const payment = async () => {
    localStorage.removeItem("orderItem");
    const order = {
      recipient: recipient,
      cellphoneNumber: cellphoneNumber,
      address: addressone + " " + addresstwo,
      memo: memo,
      item: state,
      orderState: "ready",
      orderNumber: uniqueId.slice(0, 8),
      time: serverTimestamp(),
    };
    addDoc(collection(db, "users", userLogin["uid"], "order"), {
      order: order,
    })
      .then(() => navigate("/confirm"))
      .catch((error) => alert(error));
  };

  return (
    <div className="order">
      {userLogin && state ? (
        <>
          <div className="order_payment_head">Order/Payment</div>
          <hr />
          <div className="recipient_info_head">Recipient Info</div>
          <div className="order_address">
            <hr />
            <form className="order_address_form">
              <div>
                Recipient{" "}
                <input
                  onChange={(e) => setRecipient(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div>
                Cellphone number{" "}
                <input
                  onChange={(e) => setCellphoneNumber(e.target.value)}
                  type="number"
                  required
                />
              </div>
              <div>
                Your address line one{" "}
                <input
                  onChange={(e) => setAddressone(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div>
                Your address line two{" "}
                <input
                  onChange={(e) => setAddresstwo(e.target.value)}
                  type="text"
                  required
                />
              </div>

              <div>
                Memo{" "}
                <input onChange={(e) => setMemo(e.target.value)} type="text" />
              </div>

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
              {/* <input type="submit" value="submit" /> */}
              <div className="card_element"></div>
            </form>
            <button onClick={handleToken}>Payment</button>
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
