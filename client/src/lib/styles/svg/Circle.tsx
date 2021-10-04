import React from 'react';

const Circle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="493"
      height="600"
      viewBox="0 0 493 600"
    >
      <defs>
        <filter
          id="패스_23"
          x="0"
          y="172"
          width="451"
          height="428"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="10" dy="10" />
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="타원_11"
          x="220"
          y="0"
          width="186"
          height="177"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="10" dy="10" />
          <feGaussianBlur stdDeviation="5" result="blur-2" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="타원_12"
          x="375"
          y="131"
          width="118"
          height="113"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="10" dy="10" />
          <feGaussianBlur stdDeviation="5" result="blur-3" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#패스_23)">
        <path
          id="패스_23-2"
          data-name="패스 23"
          d="M210.5,0C326.756,0,421,89.1,421,199S326.756,398,210.5,398,0,308.9,0,199,94.244,0,210.5,0Z"
          transform="translate(5 177)"
          fill="#ec86a8"
          opacity="0.7"
        />
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#타원_11)">
        <ellipse
          id="타원_11-2"
          data-name="타원 11"
          cx="78"
          cy="73.5"
          rx="78"
          ry="73.5"
          transform="translate(225 5)"
          fill="#688bc7"
          opacity="0.7"
        />
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#타원_12)">
        <ellipse
          id="타원_12-2"
          data-name="타원 12"
          cx="44"
          cy="41.5"
          rx="44"
          ry="41.5"
          transform="translate(380 136)"
          fill="#777cb4"
          opacity="0.7"
        />
      </g>
    </svg>
  );
};

export default Circle;
