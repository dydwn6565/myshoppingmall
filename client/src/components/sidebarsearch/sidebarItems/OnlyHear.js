import React from "react";
import "./OnlyHear.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function OnlyHear() {
  return (
    <div className="onlyhear">
      <span className="onlyhear_total">total</span>
      <ChevronLeftIcon className="onlyhear_total_left_icon" />
      <ChevronRightIcon className="onlyhear_total_right_icon" />
      <p>Only hear</p>
    </div>
  );
}

export default OnlyHear;
