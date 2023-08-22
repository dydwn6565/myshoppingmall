import React, { useContext, useEffect, useState } from "react";
import "./MyPageHeader.css";
import Avatar from "@mui/material/Avatar";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { UserContext } from "../../Context";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
function MyPageHeader() {
  const { user, setUser } = useContext(UserContext);
  const [userLogin] = useAuthState(auth);
  const [converter, setConverter] = useState(true);
  useEffect(() => {
    const getUserData = () => {
      if (userLogin !== null) {
        getDoc(doc(db, "users", userLogin["uid"]))
          .then((result) => {
            setUser({
              userInfo: {
                email: result.data().userInfo.email,

                userId: result.data().userInfo.userId,
                coupon: result.data().userInfo.coupon,

                userLevel: result.data().userInfo.userLevel,
                signUpDate: result.data().userInfo.signupDate,
                reward: result.data().userInfo.reward,
                point: result.data().userInfo.point,
              },
            });
            setConverter(false);
          })
          .catch((error) => alert(error));
      }
    };
    // };
    getUserData();
  }, [userLogin]);
  return (
    <div className="mypageheader">
      {userLogin !== null && user["userInfo"] !== undefined ? (
        <>
          <h3>My page</h3>
          <div className="my_page_header_container">
            <div className="userAvatar-container">
              <Avatar className="userAvatar">H</Avatar>
            </div>

            <div className="mypage_user_info">
              <h2>{user?.userInfo.userId}</h2>
              <h3>{user?.userInfo.userLevel}</h3>

              <h6>you only left 42,298 score to upgarde your level</h6>
            </div>

            <div className="mypage-user-reward">
              <MonetizationOnIcon />
              <h3>
                reward <ChevronRightIcon />
              </h3>
              {user?.userInfo.reward === "" ? (
                <h2>0</h2>
              ) : (
                <>
                  <h2>{user?.userInfo.reward}</h2>
                </>
              )}
            </div>
            <div className="mypage-user-point">
              <StarsRoundedIcon />
              <h3>
                Point <ChevronRightIcon />
              </h3>
              {user?.userInfo.point === "" ? (
                <h2>0</h2>
              ) : (
                <>
                  <h2>{user?.userInfo.point}</h2>
                </>
              )}
            </div>
            <div className="mypage-user-coupon">
              <CardMembershipIcon />
              <h3>
                Coupon
                <ChevronRightIcon />
              </h3>
              {user?.userInfo?.coupon?.length <= 0 ? (
                <h2>0</h2>
              ) : (
                <>
                  <h2>{user?.userInfo?.coupon?.length}</h2>
                </>
              )}
            </div>

            <div className="mypage-user-review">
              <RateReviewIcon />
              <h3>
                Review <ChevronRightIcon />
              </h3>
              <h2>0</h2>
            </div>
          </div>
        </>
      ) : (
        <div className="not_login">Please log in</div>
      )}
    </div>
  );
}

export default MyPageHeader;
