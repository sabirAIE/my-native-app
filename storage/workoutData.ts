import { containsKey, getData, removeItem, storeData } from ".";
import {AppRegistry, Platform} from 'react-native';
import { Workout} from "../types/data";
import data from "../data.json";



export const getWorkouts = async(): Promise<Workout[]>=>{
    console.log("getting workout data");
    const workoutData = await getData("workout-data");
    return workoutData;
}

export const getWorkoutBySlug = async (slug:string): Promise<Workout>=>{

    const workoutData = await getWorkouts();
    const workout = workoutData.filter(w => w.slug===slug)[0];
    return workout;
}

export const initWorkouts = async(): Promise<boolean> =>{
    const hasWorkoutKey = await containsKey("workout-data");
            
    if(!hasWorkoutKey){
        console.log("Saving data");
        await storeData("workout-data", data);
        return true;
    }
    return false;
}

export const clearWorkoutData = async (key:string) =>{
    const isCleared = await removeItem(key);
    return isCleared;
}