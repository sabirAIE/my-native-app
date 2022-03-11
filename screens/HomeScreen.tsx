import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import WorkoutItem from '../components/WorkoutItem';
import { useWorkouts } from '../hooks/useWorkouts';


export default function HomeScreen({navigation}: NativeStackHeaderProps){
    
    const workoutData = useWorkouts();

    return(

        <View style={styles.container}>
            <FlatList
                data={workoutData}
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