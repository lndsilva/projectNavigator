import React from "react";
import { View, Text, Button } from "react-native";

export default props=>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button 
                title="Go to Details... again"
                onPress={() => props.navigation.navigate('Home')}/>
        </View>
    )
}