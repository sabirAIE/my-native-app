import { Text, useColorScheme } from "react-native"

export function MyText(props: Text['props']){

    const colorScheme = useColorScheme();
    const color = colorScheme === 'light'? '#000':'#fff'
    
    return (
        <Text
            {...props}
            style={[props.style,{color}]}
        />
    )
}