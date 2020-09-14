import React from "react";
import Svg, { Path } from "react-native-svg";

function PageBackSVG(props) {
  return (
    <Svg width={20} height={32} viewBox="0 0 20 32" fill="none" {...props}>
      <Path
        d="M16.33.105c.852 0 1.67.327 2.325.949a3.299 3.299 0 010 4.648l-9.918 9.95 9.95 9.95a3.299 3.299 0 010 4.647 3.3 3.3 0 01-4.647 0L1.766 17.975a3.24 3.24 0 01-.95-2.324c0-.883.361-1.702.95-2.323l12.24-12.274a3.412 3.412 0 012.325-.95z"
        fill="#fff"
      />
    </Svg>
  );
}

export default PageBackSVG;
