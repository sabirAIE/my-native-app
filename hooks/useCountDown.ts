import { useEffect, useRef, useState } from "react";

export function useCountDown(idx: number, initialCount: number){

    const [countDown, setCoutDown] = useState(initialCount);

    const intervalRef = useRef<number>();
    
    
    useEffect(()=>{
        if(idx === -1){
            console.log("Returning From counter");
            return;
        }

        intervalRef.current = window.setInterval(()=>{
            setCoutDown((counter)=>{
                return counter-1;
            });

        }, 100);

        console.log(intervalRef.current);
        return ()=> cleanUP();
    }, [idx]);


    useEffect(()=>{
        setCoutDown(initialCount);

    },[initialCount]);


    useEffect(()=>{
        if(countDown===0){
           cleanUP();
        }
    },[countDown]);

    const cleanUP = ()=>{
        debugger
        if(intervalRef.current){
            window.clearInterval(intervalRef.current);
            intervalRef.current = undefined
        }
    }

    return countDown;
}