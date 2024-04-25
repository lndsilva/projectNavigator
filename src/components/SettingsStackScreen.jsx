import React from "react";
import { View, Text, Button } from "react-native";

export default props=>{
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
            <Button 
                title="Go to home..."
                onPress={() => props.navigation.navigate('Home')}/>
        </View>
    )
}