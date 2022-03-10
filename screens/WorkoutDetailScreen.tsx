import React, { useEffect } from 'react';
import { View,Text, StyleSheet} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import useCachedResources from '../hooks/useCachedResources';
import { StatusBar } from 'expo-status-bar';

//type Definations--------------------------
type DetailsParams = {
    route:{
        params:{
            slug: string
        }
    }
}

type navigation = NativeStackHeaderProps & DetailsParams

//-----------------------------------------

export default function WorkoutDetailScreen({navigation, route}: navigation){
    
    
    return(

        <View style={styles.container}>
            <Text style={styles.header}>Workout Details-{route.params.slug}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor:'#ffff43',
        flex:1
    },

    header:{
        fontSize:20,
        marginBottom:20,
        fontWeight:'bold',
    }
})