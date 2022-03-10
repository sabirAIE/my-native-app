import { useEffect, useState } from "react";
import * as Font from "expo-font"
import { clearWorkoutData, getWorkouts, initWorkouts } from "../storage/workoutData";

export default function useCachedResources(){

    const [isLoading, setIsLoading] = useState(false);


    const getFontDataAsync = async ()=>{
        
        try{
            await initWorkouts();
            await Font.loadAsync({
                "hubballi":require("../assets/fonts/Hubballi-Regular.ttf")
            });
            
        }catch(e){
            console.warn(e)
        }finally{
            setIsLoading(true);
        }
    }


    useEffect(()=>{
        getFontDataAsync();
    },[]);

    return isLoading;
}