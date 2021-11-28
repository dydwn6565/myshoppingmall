import React from "react";
import Button from "@mui/material/Button";
import "../FindId.css";
function FindIdWithCP() {
  return (
    <div className="find_id">
      <input type="text" placeholder="name" />
      <div className="verification">
        <input type="number" />
        <button className="verification_bt">Request verification</button>
      </div>
      <Button>Find Id</Button>
    </div>
  );
}

export default FindIdWithCP;
