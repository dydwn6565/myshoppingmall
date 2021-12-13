import React, { useContext, useEffect } from "react";
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
import { auth } from "../firebase";
function MyPageHeader() {
  const { user, setUser } = useContext(UserContext);
  const [userLogin, loading] = useAuthState(auth);

  return (
    <div className="mypageheader">
      {console.log(userLogin)}
      {userLogin ? (
        <>
          <h3>My page</h3>
          <Container className="my_page_header_container">
            <Row className="my_page_header_row">
              <Col>
                <Avatar className="userAvatar">H</Avatar>
              </Col>
              <Col>
                <div className="mypage_user_info">
                  {/* {console.log(user)}
                  <h2>{user?.userInfo.userId}</h2>
                  <h3>{user?.userInfo.userLevel}</h3>
                  <h6>Your date of sign up {user?.userInfo.signUpDate}</h6>
                  <h6>you only left 42,298 score to upgarde your level</h6> */}
                </div>
              </Col>
              <Col>
                <MonetizationOnIcon />
                <h3>
                  reward <ChevronRightIcon />
                </h3>
                {/* {user?.userInfo.reward === "" ? (
                  <h2>0</h2>
                ) : (
                  <>
                    <h2>{user?.userInfo.reward}</h2>
                  </>
                )} */}
              </Col>
              <Col>
                <StarsRoundedIcon />
                <h3>
                  Point <ChevronRightIcon />
                </h3>
                {/* {user?.userInfo.point === "" ? (
                  <h2>0</h2>
                ) : (
                  <>
                    <h2>{user?.userInfo.point}</h2>
                  </>
                )} */}
              </Col>
              <Col>
                <CardMembershipIcon />
                <h3>
                  Coupon
                  <ChevronRightIcon />
                </h3>
                {/* {user?.userInfo.coupon.length <= 0 ? (
                  <h2>0</h2>
                ) : (
                  <>
                    <h2>{user?.userInfo.coupon.length}</h2>
                  </>
                )} */}
              </Col>
              <Col>
                <RateReviewIcon />
                <h3>
                  Review <ChevronRightIcon />
                </h3>
                <h2>0</h2>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <div className="not_login">Please log in</div>
      )}
    </div>
  );
}

export default MyPageHeader;
