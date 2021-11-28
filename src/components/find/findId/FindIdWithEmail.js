import React from "react";
import Button from "@mui/material/Button";
import "../FindId.css";
function FindIdWithEmail() {
  return (
    <div className="find_id">
      <input type="email" placeholder="type email" />

      <Button>Find Id</Button>
    </div>
  );
}

export default FindIdWithEmail;
