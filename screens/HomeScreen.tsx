import React, { useEffect } from 'react';
import { View,Text,Button, StyleSheet, FlatList} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from "../data.json";
import { Workout } from '../types/data';


export default function HomeScreen({navigation}: NativeStackHeaderProps){

    const renderWorkoutList = ({item}:{item: Workout})=>{
        return(
            <View>
                <Text>
                    {item.name + '--'+ item.duration}
                </Text>

            </View>
        )
    }
    
    return(

        <View style={styles.container}>
            
            <FlatList
                data={data as Workout[]}
                renderItem={renderWorkoutList}
                keyExtractor={(item)=>item.slug}
            />
            
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor:'#fff000',
    }
})