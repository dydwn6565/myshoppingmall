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
      {/* {console.log(
        Object.values(state["inventory"]).find((e) => e.size === size)[
          "quantity"
        ]
      )} */}
      {/* <Dropdown title={size}>
        {state["inventory"].map((size) => (
          <Dropdown.Item onClick={() => setSize(size["size"])}>
            {size["size"]}
          </Dropdown.Item>
        ))}
      </Dropdown> */}

      {/* <Dropdown title={quantity}>
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
      </Dropdown> */}

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
      {/* {size !== "" &&
        console.log(
          "size" +
            size["size"] +
            state["inventory"].find((e) => e.size === size["size"])["quantity"]
        )} */}
      {size !== "" && (
        <Box mx={{ minWidth: 20 }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
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

      {console.log(size)}
      {console.log(quantity)}

      <button onClick={orderItem} className="add_to_cart">
        Add to cart
      </button>
    </div>
  );
}

export default DetailPage;
