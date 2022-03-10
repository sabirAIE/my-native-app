import { useEffect, useState } from "react";
import * as Font from "expo-font"

export default function useCachedResources(){

    const [isLoading, setIsLoading] = useState(false);


    const getFontDataAsync = async ()=>{
        
        try{
            await Font.loadAsync({
                "hubballi":require("../assets/fonts/Hubballi-Regular.ttf")
            })
            setIsLoading(true)
        }catch(e){
            console.warn(e)
        }
    }


    useEffect(()=>{
        getFontDataAsync();
    },[]);

    return isLoading;
}