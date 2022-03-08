import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetailPage.css";
import Rating from "@mui/material/Rating";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function DetailPage(props) {
  const { state } = useLocation();

  const [value, setValue] = useState(5);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const orderItem = () => {
    if (localStorage.getItem("orderItem") === null) {
      state["size"] = size;
      state["quantity"] = quantity;

      localStorage.setItem("orderItem", JSON.stringify([state]));
      navigate("/cart");
    } else {
      const localData = JSON.parse(localStorage.getItem("orderItem"));

      state["size"] = size;
      state["quantity"] = quantity;

      const dataArray = [...localData, state];
      const deduped = Array.from(new Set(dataArray));

      localStorage.setItem("orderItem", JSON.stringify(deduped));
      navigate("/cart");
    }
  };

  const handleSize = (event) => {
    setSize(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="detailpage_container">
        <div className="detailpage">
          <img src={`${state["image"]}`} alt="" />
          <h2>{state["brand"]}</h2>
          <h3>{state["name"]}</h3>
          <div className="detailpage_original_price">
            <h4>
              <span>Original Price: </span>
              <s className="original_price">${state["original_price"]}</s>
            </h4>
          </div>
          <div className="detailpage_discounted_price">
            <h4>
              <span>Discounted Price: </span>${state["discounted_price"]}
            </h4>
          </div>
          <div className="detail_page_like_container">
            <Rating
              className="rating_icon"
              name="read-only"
              value={value}
              readOnly
            />
            <span className="detail_page_like_span">{state["like"]}</span>
          </div>
          <div className="detail_page_review_container">
            <FavoriteOutlinedIcon />
            <span className="review_icon_span">{state["reviewer"]}</span>
          </div>

          <div className="size_selector">
            <Box mx={{ minWidth: 20 }}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label="Size"
                  onChange={handleSize}
                >
                  {state["inventory"].map((size) => (
                    <MenuItem value={size}>{size["size"]}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="quantity_selector">
            {size !== "" && (
              <Box mx={{ minWidth: 20 }}>
                <FormControl sx={{ minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">
                    Quantity
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="quantity"
                    onChange={handleQuantity}
                  >
                    {Object.values(state["inventory"]).find(
                      (e) => e.size === size["size"]
                    )["quantity"] > 10
                      ? [...Array(10)].map((el, index) => (
                          <MenuItem value={index + 1}>{index + 1}</MenuItem>
                        ))
                      : [
                          ...Array(
                            Object.values(state["inventory"]).find(
                              (e) => e.size === size["size"]
                            )["quantity"]
                          ),
                        ].map((el, index) => (
                          <MenuItem value={index + 1}>{index + 1}</MenuItem>
                        ))}
                  </Select>
                </FormControl>
              </Box>
            )}
          </div>

          {console.log(size)}
          {console.log(quantity)}

          <div className="detailpage_buttons">
            <button onClick={orderItem} className="add_to_cart">
              Add to cart
            </button>
            <button onClick={backToHome} className="add_to_cart">
              back to homepage
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
