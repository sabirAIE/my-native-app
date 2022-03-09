import React, { useEffect } from 'react';
import { View,Text, Button, } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function PlannerScreen({navigation}: NativeStackHeaderProps){

    useEffect(()=>{
        console.log("Planner Screen");
    },[]);

    return(

        <View>
            <Text>Planner Screen</Text>
            <Button
                color="#841584"
                onPress={()=>navigation.push("Test")}
                title="Test"
            />
        </View>

    );
}