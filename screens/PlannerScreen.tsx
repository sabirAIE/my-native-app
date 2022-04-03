import React, { useEffect, useState } from 'react';
import { View,Text, Button, StyleSheet, ScrollView, SafeAreaView, StatusBar, FlatList, Pressable, TouchableOpacity} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import WorkoutForm, { ExcersiseForm } from '../components/WorkoutForm';
import { Sequence, Workout, WorkoutType } from '../types/data';
import slugify from 'slugify';
import { MyModal } from '../components/styledComponents/MyModal';
import WorkoutFormSubmit, { WorkoutFormData } from '../components/WorkoutFormSubmit';
import { storeNewWorkout } from '../storage/workoutData';

export default function PlannerScreen({navigation}: NativeStackHeaderProps){

    const [seqItem, setSequenceItem] = useState <Sequence[]> ([])

    const handleExerciseSubmit = (form: ExcersiseForm)=>{
        
        const sequenceItem : Sequence = {
            slug: slugify(form.name+'-'+Date.now(),{lower:true}),
            name:form.name,
            duration: Number(form.duration),
            type: form.type as WorkoutType
        }

        if(form.reps){
            sequenceItem.reps = Number(form.reps)
        }

        setSequenceItem([...seqItem, sequenceItem])

    }


    const handleWorkoutSubmit = async (form:WorkoutFormData) =>{
        
        if(seqItem.length>0){

            const duration = seqItem.reduce((acc, item)=>{
                return acc + item.duration
            },0)

            const workoutData:Workout = {
                name:form.name,
                slug:slugify(form.name+'-'+Date.now(),{lower:true}),
                difficulty:'easy',
                duration:duration ,
                sequence:[...seqItem]
            }
            await storeNewWorkout(workoutData)
        }
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <FlatList
                        style={styles.flatList}
                        data={seqItem}
                        renderItem={({item, index})=>{
                        
                            return(
                                <Pressable
                                    onPress={()=>
                                        navigation.navigate("Store Details", {slug: item.slug})
                                    }
                                >
                                    <View style={{backgroundColor:'#fff', padding:20, margin:10}}>
                                        <Text>{item.name}</Text>

                                        <Pressable
                                            style={{marginTop:10}}
                                            onPress={()=>{
                                                const items = [...seqItem];
                                                items.splice(index,1)
                                                setSequenceItem(items);
                                            }}
                                        >
                                            <Text>Remove</Text>
                                        </Pressable>
                                    </View>
                                </Pressable>
                            );
                        }}

                        keyExtractor={(item)=>item.slug}
                    />
                </View>
            </ScrollView>

            <WorkoutForm
                onFormSubmit={handleExerciseSubmit}
            />

            <MyModal
                activator={({handleOpen})=>
                    
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={handleOpen}
                    >
                        <Text style={styles.appButtonText} >Create Exercise</Text>
                    </TouchableOpacity>
                }
            >
            {
                ({handleClose})=>
                <View>
                    <WorkoutFormSubmit
                        onFormSubmit={async (data)=>{
                            await handleWorkoutSubmit(data),
                            handleClose();
                            navigation.navigate("Home");
                        }}
                    />
                </View>
            }

            </MyModal>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList:{
        marginBottom:10
    },
    buttonStyle:{
        elevation: 8,
        backgroundColor: "green",
        borderRadius: .5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        marginBottom:10,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})