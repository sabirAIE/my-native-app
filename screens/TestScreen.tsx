import React, { useEffect } from 'react';
import { View,Text,Button} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';


export default function TestScreen({navigation}: NativeStackHeaderProps){

    useEffect(()=>{
        console.log("Test Screen");
        return ()=>console.log("unmounting TestScreen");
    },[])
    return(

        <View>
            <Text>Test Screen</Text>
            <Button
                color="#841584"
                onPress={()=>navigation.push("Root")}
                title="Root"
            />
        </View>

    );
}