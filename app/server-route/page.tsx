// import { serverSideFunction } from "@/utils/server-utils";

// export default function ServerRoutePage() {
//   const result = serverSideFunction();

//   return (
//     <div>
//       <h1 className="text-2xl font-bold underline">Server route page!!</h1>
//       <p>Result : {result}</p>
//     </div>
//   );
// }

// Third party packages :

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ServerRoutePage() {
//   const settings = {
//     dots: true,
//   };
//   return (
//     <div className="image-slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src="https://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="https://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="https://picsum.photos/400/200" />
//         </div>
//         <div>
//           <img src="https://picsum.photos/400/200" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// This leads to an error because slider component uses client side features but the library itself doesn't include the "use client" directive.

// But we cannot add "use client" here in this component becasue it's a server only code.

// Solution : Encapsulate 3rd part components that depends on client only features with in your own client component.

import { ImageSlider } from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();

  return (
    <div>
      <h1 className="text-2xl font-bold underline">Server route page!!</h1>
      <p>Result : {result}</p>
      <ImageSlider />
    </div>
  );
}