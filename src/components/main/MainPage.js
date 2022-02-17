import React, { useContext, useEffect } from "react";
import { ItemContext, SelectedItemContext } from "../../Context";
import ClothesCard from "./ClothesCard";
import Loading from "../Loading";
import "./MainPage.css";
function MainPage() {
  const handlesubmit = () => {};
  const { selectedItem, setSelectedItem } = useContext(SelectedItemContext);
  const { item, setItem } = useContext(ItemContext);

  useEffect(() => {
    const initialSelectedItem = () => {
      setSelectedItem({
        itemBigTitle: "outer",
        itemSmallTitle: ["hoody", "cardigan"],
        target: "hoody",
      });
    };
    initialSelectedItem();
  }, []);
  return (
    <div className="mainpage">
      <h1>{selectedItem["itemBigTitle"]}</h1>
      <hr />
      <div className="medium_clfc">
        <div className="medium_clfc_head">
          <p> Medium Classification</p>
        </div>
        <div className="medium_clfc_contents">
          {selectedItem["target"] === undefined ? (
            <Loading />
          ) : (
            selectedItem["itemSmallTitle"].map((item) => (
              <>
                <p
                  onClick={() =>
                    setSelectedItem({
                      itemBigTitle: "outer",
                      itemSmallTitle: ["hoody", "cardigan"],
                      target: item,
                    })
                  }
                >
                  {item}
                </p>
              </>
            ))
          )}
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
        <div className="card">
          {selectedItem["target"] !== undefined &&
          item !== "" &&
          item !== undefined ? (
            item.map((clothe, index) => <ClothesCard clothe={clothe} />)
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
