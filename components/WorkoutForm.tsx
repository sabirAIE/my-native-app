import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Pressable, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";


export type ExcersiseForm = {
    name:string,
    duration:string,
    type:string,
    reps:string
}

type WorkoutFormData = {
    onFormSubmit: (form: ExcersiseForm) =>void
}

export default function WorkoutForm({onFormSubmit}:WorkoutFormData){

    const {control, handleSubmit} = useForm();

    const [isSelectOn, setIsSelectOn] = useState(false);

    const exTypes = ['Exercise', 'Strech','Break'];
    
    return (
        <View style={styles.container}>
            <View style={styles.cotext}>
                
                <View style={styles.rowController}>
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
                                placeholder="Exercise Name"
                            />
                        }
                    />

                    <Controller
                        control={control}
                        rules={{
                            required:true
                        }}
                        name="duration"
                        defaultValue=''
                        render={({field})=>
                            <TextInput
                                onChangeText={field.onChange}
                                value={field.value}
                                style={styles.input}
                                placeholder="Exercise Duration"
                            />
                        }
                    />
                </View>
                <View style={styles.rowController}>
                    <Controller
                        control={control}
                        rules={{
                            required:true
                        }}
                        name="type"
                        defaultValue=''
                        render={({field})=>
                            <View>
                                {
                                    isSelectOn ?
                                    
                                    <View style={{flex:1}}>
                                        {
                                            exTypes.map((type,i)=>(
                                                <Pressable
                                                    key={i}
                                                    onPress={()=>{
                                                        field.onChange(type);
                                                        setIsSelectOn(false)
                                                    }}
                                                    style={{marginBottom:5, backgroundColor:'red', padding:4}}
                                                >
                                                    <Text>{type}</Text>
                                                </Pressable>
                                            ))
                                        }
                                        
                                    </View>

                                    :

                                    <TextInput
                                        onFocus={()=>setIsSelectOn(true)}
                                        value={field.value}
                                        style={styles.input}
                                        placeholder="Exercise Type"
                                    />
                                }
                            </View>
                        }
                    />

                    <Controller
                        control={control}
                        rules={{
                            required:false
                        }}
                        name="reps"
                        defaultValue=''
                        render={({field})=>
                            <TextInput
                                onChangeText={field.onChange}
                                value={field.value}
                                style={styles.input}
                                placeholder="Number of reps"
                            />
                        }
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handleSubmit((data)=>{
                        onFormSubmit(data as ExcersiseForm);
                    })}
                >
                    <Text style={styles.appButtonText} >Add</Text>
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
    cotext:{
        backgroundColor:'',
        marginBottom:10,
        padding:10,
        margin:20,
        color:'#fff'
    },
    rowController:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
})