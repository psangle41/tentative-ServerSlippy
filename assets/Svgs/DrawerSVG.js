import React from "react";
import Svg, { Path } from "react-native-svg";

export default function DrawerSVG(props) {
  return (
    <Svg width={30} height={26} viewBox="0 0 28 23" fill="none" {...props}>
      <Path
        d="M1.465 3.593H20.59a1.4 1.4 0 100-2.8H1.465a1.42 1.42 0 000 2.84v-.04zM1.464 13.087h13.662a1.366 1.366 0 100-2.732H1.464a1.366 1.366 0 000 2.732zM26.055 19.918H1.465a1.366 1.366 0 000 2.732h24.59a1.366 1.366 0 100-2.732z"
        fill="#fff"
      />
    </Svg>
  );
}
