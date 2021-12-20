import React, { useContext } from "react";
import { ItemContext, SelectedItemContext } from "../../Context";
import ClothesCard from "./ClothesCard";
import "./MainPage.css";
function MainPage() {
  const handlesubmit = () => {};
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  const { item, setItem } = useContext(ItemContext);
  return (
    <div className="mainpage">
      {/* {console.log(item)} */}
      <h1>{selectedItem["itemBigTitle"]}</h1>
      <hr />
      <div className="medium_clfc">
        <div className="medium_clfc_head">
          <p> Medium Classification</p>
        </div>
        <div className="medium_clfc_contents">
          {/* {console.log(selectedItem["target"] === undefined)}
          {console.log(selectedItem)} */}
          {selectedItem["target"] === undefined
            ? alert("loading")
            : selectedItem["itemSmallTitle"].map((item) => <p>{item}</p>)}
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
        

        {/* {console.log(selectedItem["target"] !== undefined)}
        {console.log(selectedItem !== undefined && item !== undefined)} */}
        <div className="card">
      

        {/* {selectedItem["target"] !== undefined &&
          item !== undefined &&
          item.map((clothe,index) => 
          <ClothesCard clothe={clothe}  />)} */}
        {/* <ClothesCard />
        <ClothesCard /> */}
        </div>
     
      </div>
      
    </div>
  );
}

export default MainPage;
