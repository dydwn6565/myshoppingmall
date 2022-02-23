import React from "react";
import "./Sale.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Sale() {
  return (
    <div className="sale">
      <span className="sale_total">total</span>
      <ChevronLeftIcon className="sale_total_left_icon" />
      <ChevronRightIcon className="sale_total_right_icon" />
      <div className="sale_list">
        <p>time sale</p>
        <p>clearance</p>
      </div>
    </div>
  );
}

export default Sale;
