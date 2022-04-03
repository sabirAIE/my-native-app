import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Pressable, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";


export type WorkoutFormData = {
    name:string,
}

type WorkoutFormProps = {
    onFormSubmit: (form: WorkoutFormData) =>void
}

export default function WorkoutFormSubmit({onFormSubmit}:WorkoutFormProps){

    const {control, handleSubmit} = useForm();
    
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                rules={{
                    required:true
                }}
                name="name"
                defaultValue=''
                render={({field})=>
                    <TextInput
                        onChangeText={field.onChange}
                        value={field.value}
                        style={styles.input}
                        placeholder="Workout Name"
                    />
                }
            />

            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handleSubmit((data)=>{
                    onFormSubmit(data as WorkoutFormData);
                })}
            >
                <Text style={styles.appButtonText} >Confirm</Text>
            </TouchableOpacity>

        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        borderRadius:0,
        padding:10,
        margin:10,
    },

    input: {
        flex:1,
        height: 40,
        borderWidth: 0.5,
        margin:10,
        padding:10,
    },

    buttonStyle:{
        elevation: 8,
        backgroundColor: "green",
        borderRadius: .5,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft:10,
        marginRight:10,
        marginTop:20
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
})