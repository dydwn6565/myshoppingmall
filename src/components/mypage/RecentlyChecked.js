import React, { useState, useEffect } from "react";
import "./RecentlyChecked.css";
function RecentlyChecked() {
  const [checkedItem, setCheckedItem] = useState(null);

  useEffect(() => {
    try {
      if (localStorage.getItem("recentlyCheckedItem") !== null) {
        const getCheckedLIst = () => {
          const checkedItemLIst = JSON.parse(
            localStorage.getItem("recentlyCheckedItem")
          );
          setCheckedItem(checkedItemLIst);
        };
        getCheckedLIst();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="recentlychecked">
      <h2>Recently checked items</h2>
      <hr />
      <div className="recentlychecked_container">
        {checkedItem !== null &&
          checkedItem.map((item) => (
            <>
              <div className="recentlychecked_card">
                <img src={item["image"]} />

                <h4>{item["brand"]}</h4>
                <div className="recentlychecked_item_name">{item["name"]}</div>
                <div className="recentlychecked_item_original_price">
                  <h5>
                    Original Price:{" "}
                    <span className="original_price">
                      <s>${item["original_price"]}</s>
                    </span>
                  </h5>
                </div>
                <h5>
                  Discounted Price:{" "}
                  <span className="discounted_price">
                    ${item["discounted_price"]}
                  </span>
                </h5>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default RecentlyChecked;
