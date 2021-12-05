import Button from "@mui/material/Button";
import React from "react";
import "./MyPageHeader.css";
import { useNavigate } from "react-router-dom";
function MyPageHeader() {
  const navigate = useNavigate();
  const moveLoginPage = () => {
    navigate("/login");
  };

  const moveToMyPage = () => {
    navigate("/myPage");
  };
  return (
    <div className="my_page_header">
      <Button className="my_page_header_login" onClick={moveLoginPage}>
        Login
      </Button>
      <p onClick={moveToMyPage}>My page</p>
      <p>Recently checked item list</p>
      <p>My shopping bag</p>
      <p>Tracking my items</p>
      <p>Contact</p>
    </div>
  );
}

export default MyPageHeader;
