import React, { useEffect, useState } from "react";
import "./Cart.css";
import RemoveIcon from "@mui/icons-material/Remove";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
function Cart() {
  const [orderState, setOrderState] = useState([]);
  const [checkBox, setCheckBox] = useState({});
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
  const navigate = useNavigate();
  const checkBoxState = (index) => {
    console.log(orderState);
    if (checkBox[0] === undefined) {
      orderState.map((item, index) => (checkBox[index] = false));
      checkBox[index] = !checkBox[index];
    } else {
      console.log(!Object.values(checkBox)[0]);

      console.log(checkBox[index]);
      checkBox[index] = !checkBox[index];
    }
    console.log(checkBox);
  };

  const calculatePrice = () => {
    if (orderState) {
      orderState.map((item, index) =>
        // console.log(item["original_price"] * item["quantity"])
        setTotalProductPrice(
          (prev) => prev + item["original_price"] * item["quantity"]
        )
      );
      orderState.map((item, index) =>
        setTotalDiscountPrice(
          (prev) => prev + item["discounted_price"] * item["quantity"]
        )
      );
    }
  };

  const order = () => {
    // console.log(orderState);
    navigate("/order", {
      // orderState: orderState,
      // totalPrice: totalProductPrice,
      // discounted_price: totalDiscountPrice,
      state: {
        orderState: orderState,
        totalPrice: totalProductPrice,
        discountedPrice: totalDiscountPrice,
      },
    });
  };

  const deleteItemList = () => {
    let newItemList = [];
    let arrangedArray = [];
    orderState.map((item, index) => {
      if (checkBox[index] === false) {
        newItemList[index] = item;
      }
    });
    newItemList
      .filter((item, index) => item[index] !== null)
      .map((items, index) => (arrangedArray[index] = items));
    console.log(arrangedArray);
    // (item !== undefined).map((item, index) => (newItemList[index] = item))
    // );
    setOrderState(arrangedArray);
    // localStorage.setItem("orderItem") =JSON.stringfy(orderState);
  };
  useEffect(() => {
    setTotalDiscountPrice(0);
    setTotalProductPrice(0);
    calculatePrice();
  }, [orderState]);

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("orderItem"));
    let newArray = order;
    let arrangedArray = [];

    const removeDuplicate = () => {
      for (let i = 0; i < order.length; i++) {
        for (let j = 1 + i; j < order.length; j++) {
          // console.log("i" + i);
          // console.log("j" + j);

          if (
            newArray[i]["id"] === newArray[j]["id"] &&
            newArray[i]["size"] === newArray[j]["size"]
          ) {
            // console.log("line 24");

            newArray[i]["quantity"] =
              newArray[i]["quantity"] + newArray[j]["quantity"];
            newArray[j]["quantity"] = null;
          }
          // console.log(i);
        }
      }

      newArray
        .filter((item) => item["quantity"] !== null)
        .filter((item) => item["quantity"] !== 0)
        .map((items, index) => (arrangedArray[index] = items));
    };

    removeDuplicate();
    setOrderState(arrangedArray);

    // console.log(arrangedArray);
  }, [checkBox]);
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
            {orderState.map((item, index) => (
              <>
                <Checkbox
                  xs={2}
                  md={2}
                  onClick={() => checkBoxState(index)}
                  className="cart_item_checkbox"
                />
                <Grid item xs={0.5} md={0.5} className="cart_item_number">
                  {index + 1}
                </Grid>
                <Grid item xs={2.5} md={2.5} className="order_item_name">
                  {/* {console.log(orderState)} */}
                  {item["name"]}
                </Grid>
                <Grid xs={1.7} md={1.7} item className="order_item_price">
                  {item["original_price"] * item["quantity"]}
                </Grid>
                <Grid xs={1.7} md={1.7} item>
                  {(item["original_price"] - item["discounted_price"]) *
                    item["quantity"]}
                </Grid>
                <Grid xs={1.5} md={1.5} item>
                  {item["quantity"]}
                </Grid>
                <Grid xs={1.5} md={1.5} item>
                  Free
                </Grid>
              </>
            ))}
          </Grid>
        )}
      </div>
      <button className="delete_order_list" onClick={deleteItemList}>
        dt a pt
      </button>
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
        <span>product price: {totalProductPrice}</span>
        <RemoveIcon className="svg_icons" />
        <span>total discount:{totalDiscountPrice}</span>
        <DragHandleIcon className="svg_icons" />
        <span>Total price: {totalProductPrice - totalDiscountPrice}</span>
      </div>
    </div>
  );
}

export default Cart;
