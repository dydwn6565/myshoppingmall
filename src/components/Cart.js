import React from "react";
import "./Cart.css";
import RemoveIcon from "@mui/icons-material/Remove";
import DragHandleIcon from "@mui/icons-material/DragHandle";
function Cart() {
  const order = () => {};
  return (
    <div className="cart">
      <h3>Order /Payment</h3>
      <hr />
      <h3>Delivery</h3>
      <div className="order_container">
        <div className="order_container_title">
          <p>total</p>
          <p>product name</p>
          <p>price</p>
          <p>qt</p>
          <p>price</p>
          <p>delivery fee</p>
        </div>
        <hr />
        <p></p>
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
