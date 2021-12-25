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

function Order() {
  const navigate = useNavigate();
  const [userLogin, loading] = useAuthState(auth);
  const { state, totalPrice, discounted_price } = useLocation();
  const [user, setUser] = useState("");
  const [recipient, setRecipient] = useState("");
  const [cellphoneNumber, setCellphoneNumber] = useState(0);
  const [address, setAddress] = useState("");
  const [memo, setMemo] = useState("");

  const payment = async () => {
    // localStorage.removeItem("orderItem")
    const order = {
      recipient: recipient,
      cellphoneNumber: cellphoneNumber,
      address: address,
      memo: memo,
      item: state,
      orderState: "reday",
      time: serverTimestamp(),
    };
    addDoc(collection(db, "users", userLogin["uid"], "order"), {
      order: order,
    })
      .then(() => navigate("/confirm"))
      .catch((error) => alert(error));
  };
  const order_address_form = () => {};

  return (
    <div className="order">
      {userLogin ? (
        <>
          {console.log(userLogin)}
          {console.log(user)}
          <div>Order/Payment</div>
          <hr />
          <div>Recipient Info</div>
          <div className="order_address">
            <hr />
            <form className="order_address_form" action="handleAddress">
              <div>
                Recipient{" "}
                <input
                  onChange={(e) => setRecipient(e.target.value)}
                  type="text"
                />
              </div>
              <div>
                Cellphone number{" "}
                <input
                  onChange={(e) => setCellphoneNumber(e.target.value)}
                  type="number"
                />
              </div>
              <div>
                Your address{" "}
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                />
              </div>
              <div>
                Memo{" "}
                <input onChange={(e) => setMemo(e.target.value)} type="text" />
              </div>
              {console.log(recipient)}
              {console.log(state)}
              {console.log("line77" + state["orderState"][1]["id"])}
            </form>

            <div className="item_list">
              <h1>{console.log(state)}</h1>
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
              Total price: {state["totalPrice"]}
            </div>
            <button onClick={payment}>Payment</button>
          </div>
        </>
      ) : (
        navigate("/login")
      )}
    </div>
  );
}

export default Order;
