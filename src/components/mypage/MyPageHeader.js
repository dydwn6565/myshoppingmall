import React, { useContext, useEffect, useState } from "react";
import "./MyPageHeader.css";
import Avatar from "@mui/material/Avatar";
import { Container, Row, Col } from "react-grid-system";
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
  const [userLogin, loading] = useAuthState(auth);
  const [converter, setConverter] = useState(true);
  useEffect(() => {
    // const getuserData = () => {
    // console.log(userLogin);
    // console.log(!loading);
    const getUserData = () => {
      if (userLogin !== null) {
        getDoc(doc(db, "users", userLogin["uid"]))
          .then((result) => {
            // console.log(result.data().userInfo);
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
      {/* {console.log(user)} */}
      {/* {console.log(userLogin)} */}
      {/* {converter === true ? getUserData() : alert("loading")} */}
      {userLogin !== null && user["userInfo"] !== undefined ? (
        <>
          <h3>My page</h3>
          <div className="my_page_header_container">
            {/* <Container className="my_page_header_container">
            <Row className="my_page_header_row"> */}
            <div>
              <Avatar className="userAvatar">H</Avatar>
            </div>

            <div className="mypage_user_info">
              {console.log(user["userInfo"])}
              <h2>{user?.userInfo.userId}</h2>
              <h3>{user?.userInfo.userLevel}</h3>

              <h6>you only left 42,298 score to upgarde your level</h6>
            </div>

            <div>
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
            <div>
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
            <div>
              <CardMembershipIcon />
              <h3>
                Coupon
                <ChevronRightIcon />
              </h3>
              {user?.userInfo.coupon.length <= 0 ? (
                <h2>0</h2>
              ) : (
                <>
                  <h2>{user?.userInfo.coupon.length}</h2>
                </>
              )}
            </div>

            <div>
              <RateReviewIcon />
              <h3>
                Review <ChevronRightIcon />
              </h3>
              <h2>0</h2>
            </div>
          </div>
          {/* </Row>
          </Container> */}
        </>
      ) : (
        <div className="not_login">Please log in</div>
      )}
    </div>
  );
}

export default MyPageHeader;
