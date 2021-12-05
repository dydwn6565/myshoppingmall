import React from "react";
import ClothesCard from "./ClothesCard";
import "./MainPage.css";
function MainPage() {
  const handlesubmit = () => {};
  return (
    <div className="mainpage">
      <h1>Pants</h1>
      <hr />
      <div className="medium_clfc">
        <div className="medium_clfc_head">
          <p> Medium Classification</p>
        </div>
        <div className="medium_clfc_contents">
          <p>Denim Pants</p>
          <p>Slacks</p>
        </div>
      </div>
      <hr />

      <form onSubmit={handlesubmit}>
        <label>Search</label>
        <input type="text" />
        <input type="submit" />
      </form>
      <hr />
      <div className="card_collection">
        <ClothesCard />
        <ClothesCard />
      </div>
    </div>
  );
}

export default MainPage;
