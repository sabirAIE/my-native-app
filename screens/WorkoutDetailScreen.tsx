import React, { useEffect } from 'react';
import { View,Text, StyleSheet, Pressable} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useWorkoutDetailsBySlug } from '../hooks/useWorkoutDetailsBySlug';
import { formatSec } from '../utils/TimeUtils';

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
    
    const workoutDetails = useWorkoutDetailsBySlug(route.params.slug);
    console.log(workoutDetails);

    //this will be used to display loading screen;
    if(!workoutDetails){
        return null;
    }

    return(

        <View style={styles.container}>

            {workoutDetails.sequence.map((data,i)=>(
                <Pressable
                    style={{padding:20, backgroundColor:'#fff', marginBottom:10}}
                    key={i}
                    onPress={()=>alert("hi i am pressed")}
                >
                    <Text style={{textTransform:'capitalize', fontWeight:'bold'}}>{data.type}</Text>
                    <Text>
                        Exsercise Name: {data.name}
                    </Text>
                    <Text>
                        Reps: {data.reps}, Duration: {formatSec(data.duration)}
                    </Text>
                </Pressable>
            ))}
            
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