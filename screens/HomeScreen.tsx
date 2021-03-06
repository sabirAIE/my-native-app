import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView} from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import WorkoutItem from '../components/WorkoutItem';
import { useWorkouts } from '../hooks/useWorkouts';
import useCachedResources from '../hooks/useCachedResources';
import { MyText } from '../components/styledComponents/MyText';


export default function HomeScreen({navigation}: NativeStackHeaderProps){
    const useCache = useCachedResources();
    const workoutData = useWorkouts();

    return(

        <ScrollView style={styles.container}>
            <View>
                <MyText style={{fontWeight:"bold", paddingBottom:10}}>Your Workouts</MyText>
            </View>
            <FlatList
                style={styles.flatList}
                data={workoutData}
                renderItem={({item})=>{
                    
                    return(
                        <Pressable
                            onPress={()=>
                                navigation.navigate("Store Details",{slug: item.slug})
                            }
                        >
                            <WorkoutItem  item={item}/>
                        </Pressable>
                    );
                }}
                keyExtractor={(item)=>item.slug}
            />
            
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        flex:1
    },

    header:{
        fontSize:20,
        marginBottom:20,
        fontWeight:'bold',
    },

    flatList:{
        marginBottom:10
    }
})