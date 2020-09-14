import React from "react";
import Svg, { Path } from "react-native-svg";

function RightArrowSVG(props) {
  return (
    <Svg width={25} height={21} viewBox="0 0 25 21" fill="none" {...props}>
      <Path
        d="M23.62 8.941l-7.867-7.866a1.927 1.927 0 10-2.725 2.721l4.65 4.643H2.214a1.926 1.926 0 000 3.852h15.423l-4.607 4.615a1.926 1.926 0 002.724 2.722l7.866-7.867a1.913 1.913 0 00.564-1.41 1.929 1.929 0 00-.564-1.41z"
        fill="#fff"
      />
    </Svg>
  );
}

export default RightArrowSVG;
