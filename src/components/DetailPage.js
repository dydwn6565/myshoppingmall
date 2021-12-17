import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetailPage.css";
import Rating from "@mui/material/Rating";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Dropdown } from "rsuite";
function DetailPage(props) {
  const { state } = useLocation();
  console.log(state);
  const [value, setValue] = useState(5);
  const [size, setSize] = useState("90");
  const [quantity, setQuantity] = useState("quantity");

  const orderItem = () => {
    if (localStorage.getItem("orderItem") === null) {
      console.log("hit line 16");
      state["size"] = size;
      state["quantity"] = quantity;
      console.log(state);
      localStorage.setItem("orderItem", JSON.stringify([state]));
    } else {
      const localData = JSON.parse(localStorage.getItem("orderItem"));

      console.log(localData);
      console.log("hit line 18");
      state["size"] = size;
      state["quantity"] = quantity;
      // console.log(
      //   localData.map((item, index) => {
      //     if (item["id"] === state["id"]) {
      //       console.log("same");
      //       console.log(index);
      //       localData[index]["quantity"] += state["quantity"];

      //     } else {
      //       console.log("differ");

      //     }
      //   })
      // );
      const dataArray = [...localData, state];
      const deduped = Array.from(new Set(dataArray));

      localStorage.setItem("orderItem", JSON.stringify(deduped));
    }
  };

  return (
    <div className="detailpage">
      <img src={`${state["image"]}`} alt="" />
      <h2>{state["brand"]}</h2>
      <h3>{state["name"]}</h3>
      <h4>{state["original_price"]}</h4>
      <h4>{state["discounted_price"]}</h4>
      <Rating className="rating_icon" name="read-only" value={value} readOnly />
      <span>{state["like"]}</span>
      <div>
        <FavoriteOutlinedIcon className="like_icon" />
        <span>{state["reviewer"]}</span>
      </div>

      {console.log(state["inventory"])}
      {console.log(Object.keys(state["inventory"]))}
      {console.log(
        Object.values(state["inventory"]).find((e) => e.size === size)[
          "quantity"
        ]
      )}
      <Dropdown title={size}>
        {state["inventory"].map((size) => (
          <Dropdown.Item onClick={() => setSize(size["size"])}>
            {size["size"]}
          </Dropdown.Item>
        ))}
      </Dropdown>

      <Dropdown title={quantity}>
        {/* <Dropdown.Item
          onClick={() => setQuantity(size["quantity"])}
        ></Dropdown.Item> */}
        {Object.values(state["inventory"]).find((e) => e.size === size)[
          "quantity"
        ] > 10
          ? [...Array(10)].map((el, index) => (
              <Dropdown.Item onClick={() => setQuantity(index + 1)}>
                {index + 1}
              </Dropdown.Item>
            ))
          : [
              ...Array(
                Object.values(state["inventory"]).find((e) => e.size === size)[
                  "quantity"
                ]
              ),
            ].map((el, index) => (
              <Dropdown.Item onClick={() => setQuantity(index + 1)}>
                {index + 1}
              </Dropdown.Item>
            ))}
      </Dropdown>
      <button onClick={orderItem} className="add_to_cart">
        Add to cart
      </button>
    </div>
  );
}

export default DetailPage;
