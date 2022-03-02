import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import "./MyPageMain.css";
import Loading from "../Loading";
function MyPageMain() {
  const [userLogin] = useAuthState(auth);
  const [orderState, setOrderState] = useState([]);

  useEffect(() => {
    const getOrders = () => {
      const orders = [];
      if (userLogin !== null) {
        getDocs(collection(db, "users", userLogin["uid"], "order"))
          .then((result) =>
            result.forEach((order) => orders.push(order.data()))
          )
          .then(() => setOrderState(orders))
          .catch((error) => alert(error));
      }
    };
    getOrders();
  }, [userLogin]);

  return (
    <div className="mypagemain">
      <hr />

      <div className="order_info">
        <p>Product Information</p>
        <p>Order date</p>
        <p>Order number</p>
        <p>Order quntity</p>
        <p>Order statue</p>
      </div>
      {console.log("line42" + orderState)}
      {
        orderState[0] !== undefined && userLogin
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
          : ""
        // : alert("loading")
      }
      <hr />
    </div>
  );
}

export default MyPageMain;
