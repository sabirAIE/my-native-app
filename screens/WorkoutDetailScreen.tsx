import React, { useEffect, useState } from 'react';
import { View,Text, StyleSheet, Pressable,Modal, Button} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useWorkoutDetailsBySlug } from '../hooks/useWorkoutDetailsBySlug';
import { formatSec } from '../utils/TimeUtils';
import { MyModal } from '../components/styledComponents/MyModal';
import { FontAwesome } from '@expo/vector-icons';
import WorkoutItem from '../components/WorkoutItem';
import { Sequence } from '../types/data';

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

    const [sequence, setSequence] = useState<Sequence[]>([]);
    const workoutDetails = useWorkoutDetailsBySlug(route.params.slug);

    const addItemToSequence = (idx:number)=>{
        setSequence([...sequence, workoutDetails!.sequence[idx]]);
    }
    //this will be used to display loading screen;
    if(!workoutDetails){
        return null;
    }

    
    return(
        <>

            <View style={styles.container}>
                
                <MyModal 
                    activator={({handleOpen})=>

                        <View>
                            <WorkoutItem
                                item={workoutDetails}
                            />
                            <Button
                                onPress={handleOpen}
                                title="View Steps"
                            ></Button>
                        </View>
                    }
                >
                
                    <View>

                        {workoutDetails.sequence.map((data,i)=>(
                            <View key={i}>
                                <Pressable
                                    style={{padding:20, backgroundColor:'#fff', marginBottom:10}}
                                    onPress={()=>alert("Hi")}
                                >
                                    <Text style={{textTransform:'capitalize', fontWeight:'bold'}}>{data.type}</Text>
                                    <Text>
                                        Exsercise Name: {data.name}
                                    </Text>
                                    <Text>
                                        Reps: {data.reps}, Duration: {formatSec(data.duration)}
                                    </Text>
                                    
                                </Pressable>
                            </View>

                        ))}

                    </View>
                </MyModal>
                <View>
                    {   
                        //when sequence lenght is 0 means Execise is going on, Only then Show the Play Button
                        sequence.length ===0  &&

                        <FontAwesome
                        name='play-circle-o'
                        size={100}
                        onPress={()=> addItemToSequence(0)}
                    />}
                </View>
            </View>
        </>

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