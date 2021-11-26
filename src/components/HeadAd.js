import React, { useState } from "react";
import "./HeadAd.css";

function HeadAd() {
  const [adClicked, setAdClicked] = useState(true);

  const replaceHead = () => {
    setAdClicked((preveAdClicked) => !preveAdClicked);
  };
  return (
    <div>
      {adClicked ? (
        <img
          onClick={replaceHead}
          className="headAdImg"
          src="https://image.musinsa.com/mfile_s01/_mainbanners/new2021-11/img61949088da6ec.jpg"
          alt="headAd"
        />
      ) : (
        <img
          onClick={replaceHead}
          className="headAdImg"
          src="https://image.musinsa.com/mfile_s01/_mainbanners/new2021-11/eximg61949089007cd.jpg"
          alt="headAd"
        />
      )}
    </div>
  );
}

export default HeadAd;
