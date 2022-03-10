import * as React from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native"

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';

export default function Navigation(){
    return(
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}

//Main Page Navigation as Root
const Stack = createNativeStackNavigator();
function RootNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Root"
                component={BottomNavigator}
                options={{
                    headerShown:false
                }}    
            />
            <Stack.Screen
                name='Workout Details'
                component={WorkoutDetailScreen}
            />
        </Stack.Navigator>
    )
}

//Bottom Navigations
const BottomTab = createBottomTabNavigator();
function BottomNavigator(){
    return(
        <BottomTab.Navigator initialRouteName='Home'>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                        tabBarIcon:({color, size})=>
                        <FontAwesome name="home" size={size} color={color} />
                    }
                }
            />

            <BottomTab.Screen
                name="Planner"
                component={PlannerScreen}
                options={{
                    tabBarIcon:({color,size})=>
                    <MaterialIcons name="post-add" size={size} color={color} />
                }}
            />
        </BottomTab.Navigator>
    )
}

