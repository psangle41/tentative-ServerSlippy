import React from "react";
import Svg, { Path } from "react-native-svg";

export default function XSVG(props) {
  return (
    <Svg width={28} height={29} viewBox="0 0 28 29" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.966 7.266c.805.799.81 2.115.012 2.92l-4.055 4.089 4.09 4.054c.804.799.81 2.115.011 2.92a2.073 2.073 0 01-2.92.013l-4.088-4.055-4.055 4.089a2.073 2.073 0 01-2.92.012 2.073 2.073 0 01-.012-2.92l4.054-4.089-4.088-4.054a2.073 2.073 0 01-.013-2.92 2.073 2.073 0 012.92-.012l4.09 4.054 4.053-4.089a2.073 2.073 0 012.92-.012z"
        fill="#FF264D"
      />
    </Svg>
  );
}
