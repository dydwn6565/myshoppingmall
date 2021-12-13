import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DetailPage.css";
import Rating from "@mui/material/Rating";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
function DetailPage(props) {
  const { state } = useLocation();
  console.log(state);
  const [value, setValue] = useState(5);
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
    </div>
  );
}

export default DetailPage;
