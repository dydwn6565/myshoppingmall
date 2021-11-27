import Button from "@mui/material/Button";
import React from "react";
import "./MyPageHeader.css";
function MyPageHeader() {
  return (
    <div className="my_page_header">
      <Button className="login">Login</Button>
      <p>My page</p>
      <p>Recently checked item list</p>
      <p>My shopping bag</p>
      <p>Tracking my items</p>
      <p>Contact</p>
    </div>
  );
}

export default MyPageHeader;
