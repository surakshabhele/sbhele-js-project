import * as React from "react"

const BlueBall = (props) => (
  <svg
    width={71}
    height={71}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <circle
        cx={35.5}
        cy={32.5}
        r={15.5}
        fill="url(#b)"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={35.5}
        y1={17}
        x2={35.5}
        y2={48}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4485FF" stopOpacity={0.8} />
        <stop offset={1} stopColor="#377DFF" />
      </linearGradient>
      <filter
        id="a"
        x={0}
        y={0}
        width={71}
        height={71}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={10} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_430" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_430"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default BlueBall
