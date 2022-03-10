import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key:string, value:any) =>{

    try{
        const stringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key,stringValue);
        return true;
    }catch(e:any){
        console.error(e.message);
    }

    //in case if something goes wrong
    return false;
}


export const getData = async (key:string) =>{

    try{
        const value = await AsyncStorage.getItem(key);
        if(value!==null){
            const data = JSON.parse(value);
            return data;
        }
    }catch(e:any){
        console.error(e.message);  
    }
    //if data is not found
    return null;
}

export const containsKey = async (key:string) =>{
    try{
        const keys = await AsyncStorage.getAllKeys();
        return keys.includes(key);
    }catch(e:any){
        console.log(e.message);
    }
}


export const removeItem = async(key:string): Promise<boolean> =>{
    try{
        await AsyncStorage.removeItem(key);
        return true;
    }catch(e:any){
        console.log(e.message);
    }

    return false;
}