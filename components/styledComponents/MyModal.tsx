import React, { FunctionComponent, useState } from "react";
import { Pressable, View, Modal, Text, StyleSheet, Button} from "react-native";

type modalProps = {
    //making activator as optional Props to the modal functional component
    activator?: FunctionComponent<
        {
            handleOpen:()=>void
        }
    >,

    children: React.ReactNode,
}

export function MyModal({activator: Activator, children}: modalProps){

    const [visibleModal, setvisibleModal] = useState(false);

    return(
        <View>
            <Modal
                visible={visibleModal}
                animationType="slide"
                style={styles.modalView}

            >
                <View style={styles.centeredView}>
                    
                    {/* this is going to passed through the props */}
                    {children}

                    <Pressable>
                        <Button
                            onPress={()=>setvisibleModal(false)}
                            title="CLOSE"
                        >

                        </Button>
                    </Pressable>
                </View>
            </Modal>
            
            {
                // if activator is passed as props
                Activator?

                    //handle this
                    <Activator
                        handleOpen={()=>setvisibleModal(true)}
                    />
                    
                    :

                    //if not passed set default component
                    <Pressable
                        onPress={()=>setvisibleModal(true)}
                    >
                        <Text>Open Modal</Text>
                    </Pressable>    
            }
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:20
    },
    
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})