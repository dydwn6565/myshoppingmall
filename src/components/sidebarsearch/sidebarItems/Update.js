import React from "react";
import "./Update.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Update() {
  return (
    <div className="update">
      <span className="update_total">total</span>
      <ChevronLeftIcon className="update_total_left_icon" />
      <ChevronRightIcon className="update_total_right_icon" />
      <div className="update_list">
        <p>new</p>
        <p>sale</p>
        <p>restocked</p>
        <p>event </p>
        <p>enter</p>
        <p>popular</p>
      </div>
    </div>
  );
}

export default Update;
