import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function UncheckedSVG(props) {
  return (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
      <Rect
        x={1.125}
        y={1.125}
        width={16.23}
        height={16.23}
        rx={3.225}
        fill="#fff"
        stroke="#FF264D"
        strokeWidth={2.25}
      />
    </Svg>
  );
}

export default UncheckedSVG;
