import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetailPage.css";
import Rating from "@mui/material/Rating";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Dropdown } from "rsuite";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function DetailPage(props) {
  const { state } = useLocation();
  console.log(state);
  const [value, setValue] = useState(5);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const orderItem = () => {
    if (localStorage.getItem("orderItem") === null) {
      console.log("hit line 16");
      state["size"] = size;
      state["quantity"] = quantity;
      console.log(state);
      localStorage.setItem("orderItem", JSON.stringify([state]));
      navigate("/cart");
    } else {
      const localData = JSON.parse(localStorage.getItem("orderItem"));

      console.log(localData);

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

  return (
    <>
      <div className="detailpage_container">
        <div className="detailpage">
          <img src={`${state["image"]}`} alt="" />
          <h2>{state["brand"]}</h2>
          <h3>{state["name"]}</h3>
          <h4>{state["original_price"]}</h4>
          <h4>{state["discounted_price"]}</h4>
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

          {console.log(state["inventory"])}
          {console.log(Object.keys(state["inventory"]))}
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
                  {console.log("line133")}
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

          <button onClick={orderItem} className="add_to_cart">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
