import React from "react"
import { Text } from "react-native"


export function HubballiFontComponent(props: Text["props"]){
    return(
        <Text 
            style={[props.style, {fontFamily:"hubballi"}]}
            {...props}
        />
    )
}

// export function HubballiFontComponent({children}:{children:Text["props"]["children"]}){
//     return(
//         <Text 
//             style={{fontFamily:"hubballi", fontSize:20}}
//             children={props.children}
//         />
//     )
// }


// export function HubballiFontComponent({children}:{children:React.ReactNode}){
//     return(
//         <Text 
//             style={{fontFamily:"hubballi", fontSize:20}}
//             children={children}
//         />
//     )
// }