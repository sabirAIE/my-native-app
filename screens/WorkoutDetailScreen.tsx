import React, { useEffect, useState } from 'react';
import { View,Text, StyleSheet, Pressable,Modal, Button} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useWorkoutDetailsBySlug } from '../hooks/useWorkoutDetailsBySlug';
import { formatSec } from '../utils/TimeUtils';
import { MyModal } from '../components/styledComponents/MyModal';
import { FontAwesome } from '@expo/vector-icons';
import WorkoutItem from '../components/WorkoutItem';
import { Sequence } from '../types/data';
import { useCountDown } from '../hooks/useCountDown';

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

    const displaySeqence = ['3','2','1','GO'].reverse();

    const workoutDetails = useWorkoutDetailsBySlug(route.params.slug);
    const [sequence, setSequence] = useState<Sequence[]>([]);
    const [trackerIdx, setTrackerIdx] = useState(-1);

    const {countDown, isRunning, stop, start} = useCountDown(trackerIdx);

    const addItemToSequence = (idx: number)=>{
        let newSequence = [];

        if(idx>0){
            newSequence = [...sequence, workoutDetails!.sequence[idx]] 
        }else{
            newSequence = [workoutDetails!.sequence[idx]]; 
        }

        setSequence(newSequence);
        setTrackerIdx(idx);
        start(newSequence[idx].duration + displaySeqence.length);
    };

    useEffect(()=>{

        console.log(countDown);
        if(!workoutDetails){
            return;
        }
        
        if(trackerIdx === workoutDetails.sequence.length-1){
            return;
        }

        if(countDown === 0){
            addItemToSequence(trackerIdx+1)
        }
    },[countDown]);


    const hasReachedEnd = sequence.length === workoutDetails?.sequence.length &&
        countDown === 0

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
                
                    {()=>
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
                    }
                </MyModal>

                <View style={styles.wrapperView}>
                    <View style={styles.counterUI}>

                        <View style={styles.counterItem}>
                            {   
                                //when sequence lenght is 0 means Execise is going on, Only then Show the Play Button
                                sequence.length ===0 ?

                                <FontAwesome
                                    name='play-circle-o'
                                    size={100}
                                    onPress={()=> addItemToSequence(0)}
                                />
                                :

                                //when the timer in running
                                isRunning ?

                                <FontAwesome
                                    name='stop-circle-o'
                                    size={100}
                                    onPress={()=> stop()}
                                />
                                :
                                //when timer in stopped, resume timer
                                <FontAwesome
                                    name='play-circle-o'
                                    size={100}
                                    onPress={()=> {
                                        if(hasReachedEnd){
                                            addItemToSequence(0);
                                        }else{
                                            start(countDown)
                                        }                                    
                                    }}
                                />
                            }
                        </View>

                        {
                            sequence.length > 0 && countDown>=0 &&
                            <View style={styles.counterItem}>
                                <Text style={{fontSize:55}}>
                                    {
                                        countDown > sequence[trackerIdx].duration
                                        ?
                                        displaySeqence[countDown - sequence[trackerIdx].duration -1]
                                        :
                                        countDown
                                    }
                                </Text>
                            </View>
                        }
                    </View>

                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:50}}>
                            {
                                sequence.length ===0?
                                "Prepare"
                                :
                                hasReachedEnd?
                                "Good Job"
                                :
                                sequence[trackerIdx].name
                            }
                        </Text>
                    </View>
                </View>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex:1
    },

    header:{
        fontSize:20,
        marginBottom:20,
        fontWeight:'bold',
    },
    counterUI:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginBottom:20,
    },
    counterItem:{
        flex:1,
        alignItems:'center',
    },
    wrapperView:{
        marginTop:20,
        borderColor: 'rgba(0,0,0,0.1)',
        padding:10,
        marginBottom:10,
        backgroundColor:'#ffffff'
    }
})