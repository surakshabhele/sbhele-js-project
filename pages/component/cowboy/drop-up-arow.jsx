import * as React from "react"

function DropUpArrow(props) {
  return (
    <svg
      width={23}
      height={12}
      viewBox="0 0 23 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.933 11.541a1.646 1.646 0 01-1.145.459c-.429 0-.84-.165-1.144-.459l-8.01-7.758-8.01 7.758a1.647 1.647 0 01-1.138.44 1.645 1.645 0 01-1.13-.459c-.3-.29-.47-.684-.474-1.095-.004-.41.159-.806.454-1.102L10.49.459A1.645 1.645 0 0111.634 0c.43 0 .84.165 1.144.459l9.155 8.866c.303.294.473.693.473 1.108 0 .416-.17.814-.473 1.108z"
        fill="#fff"
      />
    </svg>
  )
}

export default DropUpArrow
