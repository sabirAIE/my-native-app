import { useEffect, useState } from "react";
import { getWorkouts } from "../storage/workoutData";
import { Workout } from "../types/data";
import { useIsFocused } from "@react-navigation/native";


export const useWorkouts = () =>{

    const [workoutData, setWorkOutData] = useState<Workout[]>([]);
    const isFocused = useIsFocused();

     const getWorkoutData = async()=>{
        const _data = await getWorkouts();
        setWorkOutData(_data);
    }

    useEffect(()=>{

        if(isFocused){
            getWorkoutData();
        }
    },[isFocused]);

    return workoutData;
}