import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default class Cities extends Component{
    state = {
        Name : '',
        Age : 0,
        IdontKnow : true
    }
    enterName(name) {
        this.setState.name = name;
    }
    render(){
        
        return(
            
            <View  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello World!</Text>
                <TextInput>Enter your name</TextInput>
                <Button onPress = {enterName}>Enter</Button>
            </View>
        );
    }
}