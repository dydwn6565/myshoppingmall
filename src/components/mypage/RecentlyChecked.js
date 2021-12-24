import React, { useState, useEffect } from "react";
import "./RecentlyChecked.css";
function RecentlyChecked() {
  const [checkedItem, setCheckedItem] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("recentlyCheckedItem") !== null) {
      const getCheckedLIst = () => {
        const checkedItemLIst = JSON.parse(
          sessionStorage.getItem("recentlyCheckedItem")
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
      {console.log(checkedItem)}
      {checkedItem !== null &&
        checkedItem.map((item) => (
          <>
            <img src={item["image"]} />
            <h2>{item["brand"]}</h2>
            <h4>{item["name"]}</h4>
            <h4>{item["original_price"]}</h4>
            <h4>{item["discounted_price"]}</h4>
          </>
        ))}
    </div>
  );
}

export default RecentlyChecked;
