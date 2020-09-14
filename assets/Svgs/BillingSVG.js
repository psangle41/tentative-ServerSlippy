import React from "react";
import Svg, { Path } from "react-native-svg";

export default function BillingSVG(props) {
  return (
    <Svg width={22} height={29} viewBox="0 0 24 31" fill="none" {...props}>
      <Path
        d="M23.51.064H.827v30.937l4.462-4.128 3.42 3.087 3.459-3.087 3.42 3.087 3.421-3.087 4.462 4.128L23.51.064zm-2.232 25.843l-2.23-2.045-3.459 3.086-3.42-3.086-3.421 3.086-3.458-3.086-2.231 2.045V2.295h18.22v23.612z"
        fill={props.color}
      />
      <Path
        d="M17.895 11.294H6.442v2.23h11.453v-2.23zM8.822 4.266h-2.23v4.756h2.23V4.266zM13.284 4.266h-2.231v4.756h2.231V4.266zM17.746 4.266h-2.231v4.756h2.23V4.266zM17.895 15.384H6.442v2.23h11.453v-2.23zM17.895 19.474H6.442v2.231h11.453v-2.231z"
        fill={props.color}
      />
    </Svg>
  );
}
