import React, { useState } from "react";
import "./HeadAd.css";

function HeadAd() {
  const [adClicked, setAdClicked] = useState(true);

  const replaceHead = () => {
    setAdClicked((preveAdClicked) => !preveAdClicked);
  };
  return (
    <>
      {adClicked ? (
        <img
          onClick={replaceHead}
          className="headAdImgOne"
          src="https://image.musinsa.com/mfile_s01/_mainbanners/new2021-11/img61949088da6ec.jpg"
          alt="headAd"
        />
      ) : (
        <img
          onClick={replaceHead}
          className="headAdImgTwo"
          src="https://image.musinsa.com/mfile_s01/_mainbanners/new2021-11/eximg61949089007cd.jpg"
          alt="headAd"
        />
      )}
    </>
  );
}

export default HeadAd;
