import Button from "@mui/material/Button";
import React from "react";
import "./MainPageHeader.css";
import { useNavigate } from "react-router-dom";
function MyPageHeader() {
  const navigate = useNavigate();
  const moveLoginPage = () => {
    navigate("/login");
  };

  const moveToMyPage = () => {
    navigate("/myPage");
  };

  const moveToRecentlyCheckedPage = () => {
    navigate("/recentlyChecked");
  };

  const moveToMyCartPage = () => {
    navigate("/cart");
  };

  const moveToTrackingMyItemPage = () => {
    navigate("/tractMyItem");
  };

  const moveToContactPage = () => {
    navigate("/contact");
  };

  return (
    <div className="my_page_header">
      <Button className="my_page_header_login" onClick={moveLoginPage}>
        Login
      </Button>
      <p onClick={moveToMyPage}>My page</p>
      <p onClick={moveToRecentlyCheckedPage}>Recently checked item list</p>
      <p onClick={moveToMyCartPage}>My shopping bag</p>
      <p onClick={moveToTrackingMyItemPage}>Tracking my items</p>
      <p onClick={moveToContactPage}>Contact</p>
    </div>
  );
}

export default MyPageHeader;
