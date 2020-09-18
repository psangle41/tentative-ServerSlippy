import React from "react";
import Svg, { Path } from "react-native-svg";

export default function TickSVG(props) {
  return (
    <Svg width={19} height={14} viewBox="0 0 19 14" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.46 5.937a1.917 1.917 0 012.703 0L6.98 8.755 14.993.742a1.917 1.917 0 012.703 0c.744.744.744 1.96 0 2.704L8.332 12.81a1.914 1.914 0 01-2.703 0l-4.17-4.17a1.917 1.917 0 010-2.703z"
        fill="#FF264D"
      />
    </Svg>
  );
}
