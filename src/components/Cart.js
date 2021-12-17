import React, { useEffect, useState } from "react";
import "./Cart.css";
import RemoveIcon from "@mui/icons-material/Remove";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Grid from "@mui/material/Grid";

import Checkbox from "@mui/material/Checkbox";
function Cart() {
  const [orderState, setOrderState] = useState("");
  const order = () => {};

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("orderItem"));
    let newArray = order;
    let arrangedArray = [];

    const removeDuplicate = () => {
      for (let i = 0; i < order.length; i++) {
        for (let j = 1 + i; j < order.length; j++) {
          console.log("i" + i);
          console.log("j" + j);

          if (
            newArray[i]["id"] === newArray[j]["id"] &&
            newArray[i]["size"] === newArray[j]["size"]
          ) {
            console.log("line 24");

            newArray[i]["quantity"] =
              newArray[i]["quantity"] + newArray[j]["quantity"];
            newArray[j]["quantity"] = null;
          }
          console.log(i);
        }
      }

      newArray
        .filter((item) => item["quantity"] !== null)
        .filter((item) => item["quantity"] !== 0)
        .map((items, index) => (arrangedArray[index] = items));
    };

    removeDuplicate();
    setOrderState(arrangedArray);
    console.log(arrangedArray);
  }, []);
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="cart">
      <h3>Order /Payment</h3>
      <hr />
      <h3>Delivery</h3>
      <div className="order_container">
        <div className="order_container_title">
          <p>total item</p>
          <p>product name</p>
          <p>price</p>
          <p>discount</p>
          <p>qt</p>
          <p>delivery fee</p>
        </div>
        <hr />
        {orderState[0] !== undefined && (
          <Grid container className="cart_details">
            <Checkbox
              xs={2}
              md={2}
              defaultChecked
              className="cart_item_checkbox"
            />
            <Grid item xs={0.5} md={0.5} className="cart_item_number">
              {orderState.length}
            </Grid>
            <Grid item xs={2.5} md={2.5} className="order_item_name">
              {console.log(orderState)}
              {orderState[0]["name"]}
            </Grid>
            <Grid xs={1.7} md={1.7} item className="order_item_price">
              {orderState[0]["original_price"]}
            </Grid>
            <Grid xs={1.7} md={1.7} item>
              {orderState[0]["discounted_price"]}
            </Grid>
            <Grid xs={1.5} md={1.5} item>
              {orderState[0]["quantity"]}
            </Grid>
            <Grid xs={1.5} md={1.5} item>
              Free
            </Grid>
          </Grid>
        )}
      </div>
      <button className="delete_order_list">dt a pt</button>
      <div className="order_details">
        <p>It is all free delivery</p>
        <p>
          The items are deliverd seperatly when you order more than 2 type of
          brands.
        </p>
        <p>Each discount rate will be applied differently.</p>
        <p>We will more charge you for overseas delivery.</p>
        <p>
          The product's price can be changed with current price and stored in
          the cart for 1 years(non member 2 days).
        </p>
        <p>The cart can hold at most 100 items.</p>
      </div>
      <button className="order_button" onClick={order}>
        Order
      </button>
      <div className="total_price">
        <span>product price</span>
        <RemoveIcon className="svg_icons" />
        <span>total discount</span>
        <DragHandleIcon className="svg_icons" />
        <span>Total price</span>
      </div>
    </div>
  );
}

export default Cart;
