import 'react-native-gesture-handler';
import React from "react";
import { Alert, Button, SafeAreaView, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

const Stack = createNativeStackNavigator();

export default props=>{
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen}
                        options={{
                            title: 'Home',
                            headerStyle: {
                              backgroundColor: '#f4511e',
                            },
                            
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                            },
                          }}
                    />
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}