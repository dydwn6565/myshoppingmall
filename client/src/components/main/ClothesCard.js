import React, { useState } from "react";
import "./ClothesCard.css";
import Rating from "@mui/material/Rating";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useNavigate } from "react-router-dom";

function ClothesCard({ clothe }) {
  const [value, setValue] = useState(5);
  const navigate = useNavigate();
  const linkToDetailPage = () => {
    if (localStorage.getItem("recentlyCheckedItem") === null) {
      localStorage.setItem("recentlyCheckedItem", JSON.stringify([clothe]));
    } else {
      console.log("hit 17 inside recentlycheckedItem");

      const localStorageData = JSON.parse(
        localStorage.getItem("recentlyCheckedItem")
      );
      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };
      const dataArray = [...localStorageData, clothe];

      const deletedDupe = dataArray.filter(
        (item, index, self) => index === self.findIndex((t) => t.id === item.id)
      );
      console.log(deletedDupe);

      localStorage.setItem("recentlyCheckedItem", JSON.stringify(deletedDupe));
      navigate(`detailpage/${clothe["id"]}`, { state: clothe });
    }
  };
  return (
    <div className="clothescard">
      <img src={`${clothe["image"]}`} alt="pants" onClick={linkToDetailPage} />
      <div className="card_script">
        <p>{clothe["brand"]}</p>
        <p>{clothe["name"]}</p>

        <div className="card_script_reviewer">
          <Rating
            className="rating_icon"
            name="read-only"
            value={value}
            readOnly
          />
          <span className="card_script_reviewer_number">
            {clothe["reviewer"]}
          </span>
        </div>

        <div className="like_icon_container">
          <FavoriteOutlinedIcon className="like_icon" />
          <span>{clothe["like"]}</span>
        </div>
      </div>
    </div>
  );
}

export default ClothesCard;
