import React, { useEffect, useState } from "react";
import "./Order.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { doc, getDoc } from "@firebase/firestore";

function Order() {
  const navigate = useNavigate();
  const [userLogin, loading] = useAuthState(auth);
  const { state, totalPrice, discounted_price } = useLocation();
  const [user, setUser] = useState("");
  const [recipient, setRecipient] = useState("");
  const [cellphoneNumber, setCellphoneNumber] = useState(0);
  const [address, setAddress] = useState("");
  const [memo, setMemo] = useState("");

  useEffect(() => {
    getDoc(doc(db, "users", userLogin["uid"])).then((result) => {
      console.log(result.data().userInfo);
      setUser({
        userInfo: {
          email: result.data().userInfo.email,

          userId: result.data().userInfo.userId,
          coupon: result.data().userInfo.coupon,
          order: result.data().userInfo.order,
          userLevel: result.data().userInfo.userLevel,
          signUpDate: result.data().userInfo.signupDate,
          reward: result.data().userInfo.reward,
          point: result.data().userInfo.point,
        },
      });
    });
  }, []);

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
              {console.log("line77" + state["orderState"][0]["id"])}
            </form>
            <button>Order</button>
          </div>
        </>
      ) : (
        navigate("/login")
      )}
    </div>
  );
}

export default Order;
