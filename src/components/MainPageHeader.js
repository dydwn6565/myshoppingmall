import Button from "@mui/material/Button";
import React, { useContext } from "react";
import "./MainPageHeader.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserContext } from "../Context";
function MyPageHeader() {
  const navigate = useNavigate();
  const [userLogin] = useAuthState(auth);
  const { user, setUser } = useContext(UserContext);
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

  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("logout");
      })
      .catch((error) => {
        alert("fail to log out");
      });
  };
  return (
    <div className="my_page_header">
      {userLogin ? (
        <>
          {/* <p>{console.log(user.userInfo["userId"])}</p> */}
          {/* <div className="logout_main_page_header"> */}
          <p>
            <span>hi!</span> {user.userInfo["userId"]}
          </p>
          <p onClick={moveToMyPage}>My page</p>
          <p onClick={moveToRecentlyCheckedPage}>Recently checked item list</p>
          <p onClick={moveToMyCartPage}>My shopping bag</p>
          <p onClick={moveToTrackingMyItemPage}>Tracking my items</p>
          <p onClick={moveToContactPage}>Contact</p>
          <p onClick={logout}>Logout</p>
          {/* </div> */}
        </>
      ) : (
        <>
          <Button className="my_page_header_login" onClick={moveLoginPage}>
            Login
          </Button>
          <p onClick={moveToMyPage}>My page</p>
          <p onClick={moveToRecentlyCheckedPage}>Recently checked item list</p>
          <p onClick={moveToMyCartPage}>My shopping bag</p>
          <p onClick={moveToTrackingMyItemPage}>Tracking my items</p>
          <p onClick={moveToContactPage}>Contact</p>
        </>
      )}
    </div>
  );
}

export default MyPageHeader;
