import React, { useEffect, useState } from "react";
import "./Cart.css";
import RemoveIcon from "@mui/icons-material/Remove";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const [orderState, setOrderState] = useState([]);
  const [checkBox, setCheckBox] = useState({});
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
  const navigate = useNavigate();

  const checkBoxState = (index) => {
    if (checkBox[0] === undefined) {
      orderState.map((item, index) => (checkBox[index] = false));
      checkBox[index] = !checkBox[index];
    } else {
      checkBox[index] = !checkBox[index];
    }
  };

  const calculatePrice = () => {
    if (orderState) {
      orderState.map((item, index) =>
        setTotalProductPrice(
          (prev) => prev + item["original_price"] * item["quantity"]
        )
      );
      orderState.map((item, index) =>
        setTotalDiscountPrice(
          (prev) =>
            prev +
            (item["original_price"] - item["discounted_price"]) *
              item["quantity"]
        )
      );
    }
  };

  const order = () => {
    console.log(orderState[0]);
    if (orderState[0] !== undefined) {
      navigate("/order", {
        state: {
          orderState: orderState,
          totalPrice: totalProductPrice,
          discountedPrice: totalDiscountPrice,
        },
      });
    } else {
      alert("please selete any items");
    }
  };

  const deleteItemList = () => {
    let newItemList = [];
    let newCheckBox = [];
    let arrangedArray = [];

    if (orderState) {
      orderState.map((item, index) => {
        if (checkBox[index] === false) {
          newItemList[index] = item;
          newCheckBox[index] = checkBox[index];
        }
      });

      newItemList
        .filter((item, index) => item[index] !== null)
        .map((items, index) => (arrangedArray[index] = items));
      console.log(arrangedArray);

      setOrderState(arrangedArray);
      setCheckBox(newCheckBox);
      localStorage.setItem("orderItem", JSON.stringify(arrangedArray));
    }
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
      if (order !== null) {
        for (let i = 0; i < order.length; i++) {
          for (let j = 1 + i; j < order.length; j++) {
            if (
              newArray[i]["id"] === newArray[j]["id"] &&
              newArray[i]["size"]["size"] === newArray[j]["size"]["size"]
            ) {
              newArray[i]["quantity"] =
                newArray[i]["quantity"] + newArray[j]["quantity"];
              newArray[j]["quantity"] = null;
            }
          }
        }

        newArray
          .filter((item) => item["quantity"] !== null)
          .filter((item) => item["quantity"] !== 0)
          .map((items, index) => (arrangedArray[index] = items));
      }
    };

    removeDuplicate();
    setOrderState(arrangedArray);
  }, []);

  return (
    <div className="cart">
      <h3>Order /Payment</h3>
      <hr />
      <div className="cart_title">
        <h3>Delivery Infomation</h3>
      </div>
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
        {orderState[0] !== undefined ? (
          <div container className="cart_details">
            {orderState.map((item, index) => (
              <>
                <Checkbox
                  
                  onClick={() => checkBoxState(index)}
                  className="cart_item_checkbox"
                />
                <div item  className="cart_item_number">
                  {index + 1}
                </div>
                <div item className="order_item_name">
                  {item["name"]}
                </div>
                <div  item className="order_item_price">
                  $ {item["original_price"]}
                </div>
                <div item className="order_item_discount">
                  ${" "}
                  {parseFloat(
                    item["original_price"] - item["discounted_price"]
                  ).toFixed(1)}
                </div>
                <div  item className="order_item_quantity">
                  {item["quantity"]}
                </div>
                <div  item className="order_item_delivery">
                  Free
                </div>
              </>
            ))}
          </div>
        ) : (
          <>
            <div container className="cart_details">
              <div item  className="cart_item_number"></div>
              <div item  className="order_item_name"></div>
              <div  item className="order_item_price"></div>
              <div  item></div>
              <div  item></div>
              <div  item></div>
            </div>
            <div className="cart_empty_container">
              <h3>There is no more items in the cart</h3>
            </div>
          </>
        )}
      </div>
      <div className="delete_order_list">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={deleteItemList}
        >
          delect
        </Button>
      </div>

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

      <div className="total_price">
        <span>product price: $ {totalProductPrice}</span>
        <RemoveIcon className="svg_icons" />
        <span>
          total discount: $ {parseFloat(totalDiscountPrice).toFixed(1)}
        </span>
        <DragHandleIcon className="svg_icons" />
        <span>
          Total price: ${" "}
          {parseFloat(totalProductPrice - totalDiscountPrice).toFixed(1)}
        </span>
      </div>
      <div className="order-button-container">
        <button className="order_button" onClick={order}>
          Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
