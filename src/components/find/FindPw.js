import Button from "@mui/material/Button";
import React from "react";
import "./FindPw.css";
function FindPw() {
  return (
    <div className="find_pw">
      <input type="radio" name="find_id_cell_phone" id="find_id_cell_phone" />
      <label htmlFor="find_id_cell_phone">Cell Phone</label>
      <input type="radio" name="find_id_email" id="find_id_email" />
      <label htmlFor="find_id_email">Email</label>
      <input type="text" placeholder="type Id" />
      <input type="text" placeholder="type name" />
      <div className="verification">
        <input type="number" placeholde="type your phone number without (-)" />
        <button className="verification_bt">Request verification</button>
      </div>
      <Button>Find Id</Button>
    </div>
  );
}

export default FindPw;
