import { useEffect, useState } from "react"
import { getWorkoutBySlug } from "../storage/workoutData";
import { Workout } from "../types/data";


export const useWorkoutDetailsBySlug = (slug:string)=>{

    const [workoutDetail, setWorkoutDetail] = useState<Workout>();

    useEffect(()=>{
        async function getData() {
            const workoutDetails = await getWorkoutBySlug(slug);
            setWorkoutDetail(workoutDetails)
        }
        
        getData();
    },[]);

    return workoutDetail;
}