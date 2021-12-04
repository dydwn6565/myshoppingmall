import React from "react";
import "./CompanyContact.css";
import PhoneIcon from "@mui/icons-material/Phone";
function CompanyContact() {
  return (
    <div className="companycontact">
      <PhoneIcon />
      <span>1544-7199</span>
      <p>number 1: delivery / exchange / refund</p>
      <p>number 2: payment / membership</p>
      <div className="companycontact_description">
        <p>open: 9:00 am ~ 6:00 pm / close: sat, sun, national holidays</p>
        <hr />

        <p>- check common questions</p>
        <p>- can use 1:1 request</p>
        <p>- please use product' Q&A part about the product </p>
      </div>
      <button>product review</button>
      <button>member benefit</button>
      <button>notice</button>
    </div>
  );
}

export default CompanyContact;
