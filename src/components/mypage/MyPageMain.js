import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import "./MyPageMain.css";

function MyPageMain() {
  const [userLogin, loading] = useAuthState(auth);
  const [orderState, setOrderState] = useState([]);
  useEffect(() => {
    const orders = [];
    const getOrders = () => {
      getDocs(collection(db, "users", userLogin["uid"], "order"))
        .then((result) => result.forEach((order) => orders.push(order.data())))
        .catch((error) => alert(error));
    };
    getOrders();
    // console.log(orders);

    return () => setOrderState(orders);
  }, []);

  return (
    <div className="mypagemain">
      {console.log("MypageMain line25:" + orderState)}
      {console.log("MypageMain line25:" + orderState)}
      <hr />

      <div className="order_info">
        <p>Product Information</p>
        <p>Order date</p>
        <p>Order number</p>
        <p>Order quntity</p>
        <p>Order statue</p>
      </div>
      {orderState[0] !== undefined
        ? orderState.map((order) =>
            order["order"]["item"]["orderState"].map((item) => (
              <>
                <div className="order_info_details">
                  <p className="order_info_details_name">{item["name"]}</p>
                  <p>
                    {new Date(
                      order["order"]["time"]["seconds"] * 1000
                    ).toLocaleDateString()}
                  </p>
                  <p className="order_info_details_number">
                    {order["order"]["orderNumber"]}
                  </p>
                  <p>{item["quantity"]}</p>
                  <p>{order["order"]["orderState"]}</p>
                </div>
                {console.log(order["order"])}
                {console.log(order["order"]["time"]["seconds"])}
              </>
            ))
          )
        : alert("loading")}
      <hr />
    </div>
  );
}

export default MyPageMain;
