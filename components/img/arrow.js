import React from 'react';
import Svg,{Path} from 'react-native-svg'

const Arrow=(props)=>{
    return(
        <Svg width={10} height={19} viewBox="0 0 10 19" fill="none" {...props}>
      <Path
        d="M9.376 8.894c.48.54.48 1.354 0 1.894l-6.644 7.46a1.312 1.312 0 11-1.96-1.746l4.751-5.33a2 2 0 000-2.662L.773 3.18a1.312 1.312 0 111.96-1.746l6.643 7.46z"
        fill="#4E4A4A"
      />
    </Svg>
    )
}

export default Arrow;
