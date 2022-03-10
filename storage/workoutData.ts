import { containsKey, getData, removeItem, storeData } from ".";
import { Workout} from "../types/data";
import data from "../data.json";


export const getWorkouts = async(): Promise<Workout[]>=>{
    const workoutData = await getData("workout-data");
    return workoutData;
}


export const initWorkouts = async(): Promise<boolean> =>{
    const hasWorkoutKey = await containsKey("workout-data");
            
    if(!hasWorkoutKey){
        await storeData("workout-data", data);
        return true;
    }
    return false;
}

export const clearWorkoutData = async (key:string) =>{
    const isCleared = await removeItem(key);
    return isCleared;
}