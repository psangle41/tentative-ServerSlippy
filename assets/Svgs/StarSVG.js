import React from "react";
import Svg, { Path } from "react-native-svg";

function StarSVG(props) {
  return (
    <Svg width={13} height={12} viewBox="0 0 13 12" fill="none" {...props}>
      <Path
        d="M6.295.05l1.308 4.747 4.919-.222-4.11 2.711 1.731 4.61-3.848-3.072-3.849 3.071 1.731-4.609-4.11-2.711 4.919.222L6.295.05z"
        fill="#C4C4C4"
      />
    </Svg>
  );
}

export default StarSVG;
