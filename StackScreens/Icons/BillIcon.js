import React from 'react';
import Svg,{Path} from 'react-native-svg'

const BillIcon=(props)=>{
  
    return(
      <Svg width={24} height={32} viewBox="0 0 24 32" fill="none" >
      <Path
        d="M23.68.203H1V31.14l4.462-4.128 3.42 3.086 3.459-3.086 3.42 3.086 3.421-3.086 4.462 4.128L23.68.203zm-2.23 25.842L19.218 24l-3.457 3.087L12.34 24l-3.421 3.087L5.46 24 3.23 26.045V2.435h18.22v23.61z"
        fill={props.iconColor}
      />
      <Path
        d="M18.066 11.433H6.614v2.23h11.452v-2.23zM8.993 4.405h-2.23V9.16h2.23V4.405zM13.455 4.405h-2.23V9.16h2.23V4.405zM17.917 4.405h-2.231V9.16h2.231V4.405zM18.066 15.523H6.614v2.23h11.452v-2.23zM18.066 19.613H6.614v2.23h11.452v-2.23z"
        fill={props.iconColor}
      />
    </Svg>

    )
}

export default BillIcon;
