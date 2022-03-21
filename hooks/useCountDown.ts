import { useEffect, useRef, useState } from "react";

export function useCountDown(idx: number, initialCount: number=-1){

    const [countDown, setCoutDown] = useState(initialCount);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef<number>();
    
    
    useEffect(()=>{

        if(idx === -1){
            return;
        }

        if(isRunning && !intervalRef.current){

            intervalRef.current = window.setInterval(()=>{
                setCoutDown((counter)=>{
                    return counter - 1;
                });
    
            }, 1000);
        }
        
        return ()=> cleanUP();
    }, [idx, isRunning]);


    useEffect(()=>{
        setCoutDown(initialCount);

    },[initialCount]);


    useEffect(()=>{
        if(countDown===0){
           cleanUP();
        }
    },[countDown]);

    const cleanUP = ()=>{
        if(intervalRef.current){
            setIsRunning(false);
            window.clearInterval(intervalRef.current);
            intervalRef.current = undefined
        }
    }

    const startTimer= (count?:number)=>{
        setCoutDown(count ?? initialCount);
        setIsRunning(true);
    }

    return {
        countDown,
        isRunning,
        stop:cleanUP,
        start:startTimer,

    };
}