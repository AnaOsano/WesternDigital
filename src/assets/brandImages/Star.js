import React from "react";

const Star = () => {
  return (
    <svg
      width="45"
      height="50"
      viewBox="0 0 45 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_240_3098)">
        <path
          d="M26 16L27.7961 21.5279H33.6085L28.9062 24.9443L30.7023 30.4721L26 27.0557L21.2977 30.4721L23.0938 24.9443L18.3915 21.5279H24.2039L26 16Z"
          fill="#F8DF00"
        />
        <path
          d="M26.3804 15.8764L26 14.7056L25.6196 15.8764L23.9133 21.1279H18.3915H17.1605L18.1564 21.8515L22.6236 25.0971L20.9173 30.3485L20.5369 31.5193L21.5328 30.7957L26 27.5502L30.4672 30.7957L31.4631 31.5193L31.0827 30.3485L29.3764 25.0971L33.8436 21.8515L34.8395 21.1279H33.6085H28.0867L26.3804 15.8764Z"
          stroke="white"
          strokeWidth="0.8"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_240_3098"
          x="0.929688"
          y="0.411148"
          width="50.1406"
          height="49.1554"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="7.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.929412 0 0 0 0 0.760784 0 0 0 0 0 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_240_3098"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.322638 0 0 0 0 0.282535 0 0 0 0 0.329167 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_240_3098"
            result="effect2_dropShadow_240_3098"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_240_3098"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Star;
