import React from "react";
import Svg, { Path } from "react-native-svg";

function FilledStarSVG(props) {
  return (
    <Svg width={14} height={12} viewBox="0 0 14 12" fill="none" {...props}>
      <Path
        d="M7.156.05l1.309 4.747 4.919-.222-4.11 2.711 1.731 4.61-3.849-3.072-3.848 3.071 1.731-4.609L.93 4.575l4.919.222L7.156.05z"
        fill="#FFC805"
      />
    </Svg>
  );
}

export default FilledStarSVG;
