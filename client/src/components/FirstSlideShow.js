// import React, { useRef, useState } from "react";
// import "./FirstSlideShow.css";
// import { Slide } from "react-slideshow-image";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const images = [
//   "http://cdn3-aka.makeshop.co.kr/shopimages/coorcoor/009001000100.jpg?1629809340",
//   "http://cdn3-aka.makeshop.co.kr/shopimages/coorcoor/009001000098.jpg?1629809595",

//   "http://cdn3-aka.makeshop.co.kr/shopimages/coorcoor/009001000097.jpg?1629809684",
//   "http://www.coor.kr/shopimages/coorcoor/mobile/3/2597673_represent?1629857369",

//   "http://www.coor.kr/shopimages/coorcoor/mobile/5/2597725_represent?1629858128",
//   "http://www.coor.kr/shopimages/coorcoor/mobile/6/2597726_represent?1629858039",

//   "http://www.coor.kr/shopimages/coorcoor/mobile/4/2597714_represent?1629862348",
//   "http://www.coor.kr/shopimages/coorcoor/mobile/5/2597695_represent?1629861996",

//   "http://www.coor.kr/shopimages/coorcoor/mobile/5/2597715_represent?1629862267",
//   "http://www.coor.kr/shopimages/coorcoor/mobile/2/2597742_represent?1629796748",

//   "http://www.coor.kr/shopimages/coorcoor/mobile/1/2597741_represent?1629796515",
//   "http://www.coor.kr/shopimages/coorcoor/mobile/0/2597740_represent?1629796552",
// ];
// const delay = 3500;

// function FirstSlideShow() {
//   const [index, setIndex] = useState(0);
//   const [coverpage, setCoverpage] = useState("");
//   const timeoutRef = useRef(null);
//   const navigate = useNavigate();
//   const resetTimeout = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };

//   const moveToMainPage = () => {
//     setCoverpage("disappearthePage");
//   };
//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );
//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <>
//       {/* <div className={`firstslideshow ${coverpage}`}> */}
//       <div block className={`firstslideshow ${coverpage}`}>
//         <button onClick={moveToMainPage}>
//           <span> Start website</span>
//         </button>
//         <div className="slideshow">
//           <div
//             className="slideshowSlider"
//             style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
//           >
//             {images.map((image, index) => (
//               <div className="slide" key={index}>
//                 <img src={image} alt="" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FirstSlideShow;
