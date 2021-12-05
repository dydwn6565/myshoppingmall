import React, { useState } from "react";
import "./ClothesCard.css";
import Rating from "@mui/material/Rating";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
function ClothesCard() {
  const [value, setValue] = useState(5);
  return (
    <div className="clothescard">
      <img
        src="https://image.msscdn.net/images/goods_img/20191107/1216295/1216295_3_125.jpg"
        alt="pants"
      />
      <div className="card_script">
        <p>Musinsa standard</p>
        <p>tapered hidden banding crop slacks [medium gray]</p>

        <Rating
          className="rating_icon"
          name="read-only"
          value={value}
          readOnly
        />
        <span>65,890</span>
        <div className="like_icon_container">
          <FavoriteOutlinedIcon className="like_icon" />
          <span>77530</span>
        </div>
      </div>
    </div>
  );
}

export default ClothesCard;
