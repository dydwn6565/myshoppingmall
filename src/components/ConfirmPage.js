import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useEffect } from "react";

import { auth, db } from "./firebase";
import { v4 as uuid } from "uuid";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import MainPageHeader from "./MainPageHeader";
import MainPageSearch from "./MainPageSearch";

function ConfirmPage() {
  const uniqueId = uuid();
  const navigate = useNavigate();

  const [userLogin] = useAuthState(auth);

  useEffect(() => {
    const payment = async () => {
      localStorage.removeItem("orderItem");

      const { recipient, cellphoneNumber, address, memo, orderState } =
        JSON.parse(localStorage?.getItem("user_delivery_info"));
      const order = {
        recipient: recipient,
        cellphoneNumber: cellphoneNumber,
        address: address,
        memo: memo,
        item: orderState.orderState.map((item) => {
          return {
            quantity: item.quantity,
            name: item.name,
            brand: item.brand,
            size: item.size.size,
            price: item.discounted_price,
          };
        }),
        statue: "ready",
        orderNumber: uniqueId.slice(0, 8),
        time: serverTimestamp(),
      };
      addDoc(collection(db, "users", userLogin["uid"], "order"), {
        order: order,
      }).catch((error) => alert(error));
    };
    if (JSON.parse(localStorage?.getItem("user_delivery_info")) && userLogin) {
      payment();
    }
  });

  return (
    <>
      {userLogin ? (
        <div>
          {/* <HeadAd /> */}

          <MainPageSearch />
          <MainPageHeader />
          <h1>Thank you for your payment</h1>
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
}

export default ConfirmPage;
