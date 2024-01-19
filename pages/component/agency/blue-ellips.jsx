import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={6}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx={2.51} cy={2.929} rx={2.5} ry={2.625} fill="#377DFF" />
  </svg>
)

export default SvgComponent
