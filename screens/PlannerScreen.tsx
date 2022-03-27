import React, { useEffect } from 'react';
import { View,Text, Button, StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import WorkoutForm, { ExcersiseForm } from '../components/WorkoutForm';

export default function PlannerScreen({navigation}: NativeStackHeaderProps){

    const handleSubmit = (form: ExcersiseForm)=>{
        alert(form.name);
    }

    return(
        <View style={styles.container}>
            <WorkoutForm
                onFormSubmit={handleSubmit}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})