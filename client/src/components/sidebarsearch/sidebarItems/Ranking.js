import React from "react";
import "./Ranking.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Ranking() {
  return (
    <div className="ranking">
      <div className="ranking_head">
        <span>Item</span>
        <span>brand</span>
        <span className="ranking_total">total</span>
        <ChevronLeftIcon className="ranking_total_left_icon" />
        <ChevronRightIcon className="ranking_total_right_icon" />
        <hr />
        <p>total</p>
        <p>top</p>
        <p>outer</p>
        <p>bottom</p>
        <p>bag</p>
        <p>shose</p>
        <p>etc</p>
      </div>
    </div>
  );
}

export default Ranking;
