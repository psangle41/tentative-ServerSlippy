import React from 'react';
import Svg,{Path} from 'react-native-svg'

const Person=(props)=>{
    return(
        <Svg width={36} height={37} viewBox="0 0 36 37" fill="none" {...props}>
      <Path
        d="M18.275 36.056a17.627 17.627 0 110-35.253 17.627 17.627 0 010 35.253zm0-32.049a14.422 14.422 0 100 28.845 14.422 14.422 0 000-28.845z"
        fill="#FF264D"
      />
      <Path
        d="M18.275 16.827a3.205 3.205 0 100-6.41 3.205 3.205 0 000 6.41zM18.275 18.43a8.365 8.365 0 00-7.147 3.557 8.012 8.012 0 0014.294 0 8.365 8.365 0 00-7.147-3.558z"
        fill="#FF264D"
      />
    </Svg>
    )
}

export default Person;
