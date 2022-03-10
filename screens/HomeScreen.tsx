import React, { useEffect } from 'react';
import { View,Text,Button, StyleSheet, FlatList} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from "../data.json";
import { Workout } from '../types/data';
import WorkoutItem from '../components/WorkoutItem';
import useCachedResources from '../hooks/useCachedResources';
import { StatusBar } from 'expo-status-bar';
import { HubballiFontComponent } from '../components/styledComponents/HubballiFontComponent';


export default function HomeScreen({navigation}: NativeStackHeaderProps){
    
    const isLoaded = useCachedResources();
    console.log(isLoaded);

    if(isLoaded){
        return(

            <View style={styles.container}>
                <Text style={styles.header}>Workouts</Text>
                    <HubballiFontComponent style={{fontSize:20}}>
                        New Styled Font
                    </HubballiFontComponent>
                <FlatList
                    data={data as Workout[]}
                    renderItem={WorkoutItem}
                    keyExtractor={(item)=>item.slug}
                />
                
            </View>
    
        );
    }else{
        return(
            <StatusBar/>
        )
    }
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