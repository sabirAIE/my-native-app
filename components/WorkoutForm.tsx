import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Pressable, TouchableOpacity } from "react-native";



export type ExcersiseForm = {
    name:string,
    duration:string
}

type WorkoutFormData = {
    onFormSubmit: (form: ExcersiseForm) =>void
}

export default function WorkoutForm({onFormSubmit}:WorkoutFormData){

    const [form, setForm] = useState({
        name:'',
        duration:''
    })

    const onChangeForm = (name:string) =>(text:string)=>{
        setForm({
            ...form,
            [name]:text
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.cotext}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeForm('name')}
                    value={form.name}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeForm('duration')}
                    value={form.duration}
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => onFormSubmit(form)}
                >
                    <Text style={styles.appButtonText} >Save</Text>
                </TouchableOpacity>
            </View>
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
        height: 40,
        borderWidth: 0.5,
        margin:10,
        padding:10,
        borderRadius:10
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
    cotext:{
        backgroundColor:'',
        marginBottom:10,
        padding:10,
        margin:20,
        color:'#fff'
    }
})