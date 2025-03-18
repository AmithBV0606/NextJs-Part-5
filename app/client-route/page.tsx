"use client";

// import { serverSideFunction } from "@/utils/server-utils";

// export default function ClientRoutePage() {
//   const result = serverSideFunction();

//   return (
//     <div>
//       <h1 className="text-2xl font-bold underline">Client route page!!</h1>

//       <p>Result : {result}</p>
//     </div>
//   );
// }

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Context providers
import { useTheme } from "@/components/theme-provider";

// Client Only code
import { ClientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const settings = {
    dots: true,
  };

  const theme = useTheme();

  const result = ClientSideFunction();

  return (
    <div className="image-slider-container">
      <h1 style={{ color: theme.colors.primary, fontSize: "30px", fontWeight: 700 }}>
        Client route page
      </h1>

      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
        <div>
          <img src="https://picsum.photos/400/200" />
        </div>
      </Slider>

      <p>Result : {result}</p>
    </div>
  );
}
