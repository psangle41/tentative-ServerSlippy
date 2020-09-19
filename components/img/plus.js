import React from 'react';
import Svg,{Path} from 'react-native-svg'

const Plus=(props)=>{
    return(
        <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.813.031c1.134 0 2.065.93 2.065 2.065v5.758h5.758c1.134 0 2.065.93 2.065 2.065 0 1.134-.931 2.064-2.065 2.064h-5.758v5.759c0 1.134-.93 2.064-2.065 2.064a2.073 2.073 0 01-2.065-2.064v-5.759H2.99A2.073 2.073 0 01.925 9.92c0-1.134.93-2.065 2.065-2.065h5.758V2.096c0-1.134.93-2.065 2.065-2.065z"
        fill="#FF264D"
      />
    </Svg>
    )
}

export default Plus;
