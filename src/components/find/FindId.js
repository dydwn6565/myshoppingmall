import React, { useState } from "react";
import "./FindId.css";
import Button from "@mui/material/Button";
import FindIdWithCP from "./findId/FindIdWithCP";
import FindIdWithEmail from "./findId/FindIdWithEmail";

function FindId() {
  const [findIdMethod, setFindIdMethod] = useState("cp");

  return (
    <div className="find_id">
      <input
        type="radio"
        name="find_id"
        id="find_id_cell_phone"
        onClick={() => setFindIdMethod("cp")}
      />
      <label htmlFor="find_id_cell_phone">Cell Phone</label>
      <input
        type="radio"
        name="find_id"
        id="find_id_email"
        onClick={() => setFindIdMethod("email")}
      />
      <label htmlFor="find_id_email">Email</label>

      {/* <input type="text" placeholder="name" />
      <div className="verification">
        <input type="number" />
        <button className="verification_bt">Request verification</button>
      </div>
      <Button>Find Id</Button> */}
      {findIdMethod === "cp" ? <FindIdWithCP /> : <FindIdWithEmail />}
      {/* <FindIdWithCP /> */}
    </div>
  );
}

export default FindId;
