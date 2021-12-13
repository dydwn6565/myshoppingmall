import React, { useState } from "react";
import "./ClothesCard.css";
import Rating from "@mui/material/Rating";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useNavigate } from "react-router-dom";

function ClothesCard({ clothe }) {
  const [value, setValue] = useState(5);
  const navigate = useNavigate();
  const linkToDetailPage = () => {
    if (sessionStorage.getItem("resultlyCheckedItem") === null) {
      sessionStorage.setItem("recentlyCheckedItem", JSON.stringify([clothe]));
      console.log("hit line 12");
    } else {
      const sessionData = JSON.parse(
        sessionStorage.getItem("recentlyCheckedItem")
      );
      console.log(sessionData);
      console.log("hit line 18");
      const dataArray = [...sessionData, clothe];
      const deduped = Array.from(new Set(dataArray));

      sessionStorage.setItem("recentlyCheckedItem", JSON.stringify(deduped));
    }
    navigate(`./${clothe["id"]}`, { state: clothe });
  };
  return (
    <div className="clothescard">
      <img src={`${clothe["image"]}`} alt="pants" onClick={linkToDetailPage} />
      <div className="card_script">
        <p>{clothe["brand"]}</p>
        <p>{clothe["name"]}</p>

        <Rating
          className="rating_icon"
          name="read-only"
          value={value}
          readOnly
        />
        <span>{clothe["reviewer"]}</span>
        <div className="like_icon_container">
          <FavoriteOutlinedIcon className="like_icon" />
          <span>{clothe["like"]}</span>
          {console.log(clothe)}
        </div>
      </div>
    </div>
  );
}

export default ClothesCard;
