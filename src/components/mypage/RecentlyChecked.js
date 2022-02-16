import React, { useState, useEffect } from "react";
import "./RecentlyChecked.css";
function RecentlyChecked() {
  const [checkedItem, setCheckedItem] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("recentlyCheckedItem") !== null) {
      const getCheckedLIst = () => {
        const checkedItemLIst = JSON.parse(
          localStorage.getItem("recentlyCheckedItem")
        );
        setCheckedItem(checkedItemLIst);
      };
      getCheckedLIst();
    }
  }, []);
  return (
    <div className="recentlychecked">
      <h2>Recently checked items</h2>
      <hr />
      <div className="recentlychecked_container">
        {/* {console.log(checkedItem)} */}

        {checkedItem !== null &&
          checkedItem.map((item) => (
            <>
              <div>
                <img src={item["image"]} />

                <h3>{item["brand"]}</h3>
                <h4>{item["name"]}</h4>
                <h5>
                  Original Price:{" "}
                  <span className="original_price">
                    <s>{item["original_price"]}</s>
                  </span>
                </h5>
                <h5>
                  Discounted Price:{" "}
                  <span className="discounted_price">
                    {item["discounted_price"]}
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
