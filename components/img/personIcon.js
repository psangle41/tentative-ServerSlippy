import React from 'react';
import Svg,{Path} from 'react-native-svg'

const PersonIcon=(props)=>{
    return(
        <Svg width={29} height={31} viewBox="0 0 29 31" fill="none" {...props}>
      <Path
        d="M14.616 19.123a9.354 9.354 0 100-18.709 9.354 9.354 0 000 18.71z"
        fill="#707070"
      />
      <Path
        d="M22.338 18.727a11.783 11.783 0 01-7.722 2.877 11.783 11.783 0 01-7.722-2.877C3.108 21.234.609 25.531.609 30.412h28.014c0-4.881-2.5-9.178-6.285-11.685z"
        fill="#707070"
      />
    </Svg>
    )
}

export default PersonIcon;