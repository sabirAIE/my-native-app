import { Workout } from "../types/data";
import {View, Text,StyleSheet} from "react-native"
import { HubballiFontComponent } from "./styledComponents/HubballiFontComponent";
import { secToMin, formatSec } from "../utils/TimeUtils";

export default function WorkoutItem({item}:{item: Workout}){
    return(
        <View style={styles.container}>
            <HubballiFontComponent style={styles.name}>
                {item.name}--New Styled Font                
            </HubballiFontComponent>

            <HubballiFontComponent style={styles.duration}>
                Duration: {formatSec(item.duration)}
            </HubballiFontComponent>

            <HubballiFontComponent style={styles.difficulty}>
                Difficulty: {item.difficulty}
            </HubballiFontComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth:1,
        padding:10,
        marginBottom:10,
        backgroundColor:'#ffffff'
    },

    name:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:5,
    },

    duration:{
        fontSize:15,
    },

    difficulty:{
        fontSize:15
    }
})