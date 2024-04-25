import 'react-native-gesture-handler';
import React from "react";
import { Alert, Button, SafeAreaView, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import SettingsStackScreen from './components/SettingsStackScreen';


const Tab = createBottomTabNavigator();

export default props=>{
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route})=>(
                        {
                            tabBarIcon: ({focused, color, size})=>{
                                let iconName

                                if (route.name === 'Home') {
                                    iconName = focused
                                    ? 'home'
                                    : 'home-outline'                                    
                                }
                                else if(route.name === 'Details'){
                                    iconName = focused
                                    ? 'document'
                                    : 'document-outline'
                                }
                                else if(route.name === 'Settings'){
                                    iconName = focused
                                    ? 'settings'
                                    : 'settings-outline'
                                }
                                return <Icon name={iconName} size={size} color={color}
                    />
                            },
                        }
                    )}
                >
                    <Tab.Screen name='Home' component={HomeScreen}/>
                    <Tab.Screen name='Details' component={DetailsScreen}/>
                    <Tab.Screen name='Settings' component={SettingsStackScreen}/>
                </Tab.Navigator>                
            </NavigationContainer>
        </SafeAreaView>
    )
}