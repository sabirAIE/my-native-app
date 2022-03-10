import React, { useEffect, useState } from 'react';
import { View,Text,Button, StyleSheet, FlatList, Pressable} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from "../data.json";
import { Workout } from '../types/data';
import WorkoutItem from '../components/WorkoutItem';
import useCachedResources from '../hooks/useCachedResources';
import { StatusBar } from 'expo-status-bar';
import { HubballiFontComponent } from '../components/styledComponents/HubballiFontComponent';
import { getWorkouts } from '../storage/workoutData';


export default function HomeScreen({navigation}: NativeStackHeaderProps){
    
    const [workoutData, setWorkOutData] = useState<Workout[]>([]);

    const getWorkoutData = async()=>{
        const _data = await getWorkouts();
        setWorkOutData(_data);
    }
    useEffect(()=>{
        getWorkoutData();
    },[])

    return(

        <View style={styles.container}>
            <Text style={styles.header}>Workouts</Text>
            <FlatList
                data={data as Workout[]}
                renderItem={({item})=>{
                    
                    return(
                        <Pressable
                            onPress={()=>
                                navigation.navigate("Workout Details",{slug: item.slug})
                            }
                        >
                            <WorkoutItem  item={item}/>
                        </Pressable>
                    );
                }}
                keyExtractor={(item)=>item.slug}
            />
            
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