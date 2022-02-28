import React from "react";
import "./MyPageSide.css";
import { useNavigate } from "react-router-dom";
function MyPageSide() {
  const navigate = useNavigate();
  const moveToRecentlyCheckedPage = () => {
    navigate("/recentlyChecked");
  };

  const moveToOrderHistory = () => {
    navigate("/myPage");
  };
  return (
    <div className="mypageside">
      <h3>My Shopping Activity</h3>
      <h4 onClick={moveToOrderHistory}>My Order History</h4>
      <h4 onClick={moveToRecentlyCheckedPage}>My Recently Checked Items</h4>
    </div>
  );
}

export default MyPageSide;
