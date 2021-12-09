import React from "react";
import "./ExtendedSearchBar.css";
import { Container, Col, Row } from "react-grid-system";
function ExtendedSearchBar() {
  return (
    <div className="extendedsearchbar">
      <Container>
        <Row>
          <div>
            <div className="recently_searched">Searched list</div>
            <div>h1</div>
            <div>h1</div>
            <div>h1</div>
          </div>
          <div>
            <div className="recently_searched">Ranking</div>
            <div>h2</div>
            <div>h2</div>
            <div>h2</div>
          </div>
          <div>
            <div className="recently_searched">Recommend</div>
            <div>h3</div>
            <div>h3</div>
            <div>h3</div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ExtendedSearchBar;
