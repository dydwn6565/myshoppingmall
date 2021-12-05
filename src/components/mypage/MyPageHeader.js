import React from "react";
import "./MyPageHeader.css";
import Avatar from "@mui/material/Avatar";
import { Container, Row, Col } from "react-grid-system";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import RateReviewIcon from "@mui/icons-material/RateReview";
function MyPageHeader() {
  return (
    <div className="mypageheader">
      <h3>My page</h3>
      <Container>
        <Row>
          <Col>
            <Avatar className="userAvatar">H</Avatar>
          </Col>
          <Col>
            <div className="mypage_user_info">
              <h2>Yongju Lee</h2>
              <h3>LV.4 Bronze</h3>
              <h6>Your date of sign up</h6>
              <h6>you only left 42,298 score to upgarde your level</h6>
            </div>
          </Col>
          <Col>
            <MonetizationOnIcon />
            <h3>
              reward <ChevronRightIcon />
            </h3>
            <h2>10,656</h2>
          </Col>
          <Col>
            <StarsRoundedIcon />
            <h3>
              Point <ChevronRightIcon />
            </h3>
            <h2>2,800</h2>
          </Col>
          <Col>
            <CardMembershipIcon />
            <h3>
              Coupon
              <ChevronRightIcon />
            </h3>
            <h2>78</h2>
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

      <div className="userInfo"></div>
    </div>
  );
}

export default MyPageHeader;
