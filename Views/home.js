import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  Button,
  View,
  Alert,
  Text,
  
} from 'react-native';

export default class Home extends Component {
    constructor(props){
        super(props) 
        this.state = {
            name : "",
            age : 0,
            address : ""
        }
       
    }
    render(){
        return(
            <View  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello World!</Text>
                <TextInput placeholder="Enter your Name" style={styles.textInput} onChangeText={text => {this.setState({name : text})}}></TextInput>
                <TextInput placeholder="Enter your Age" style={styles.textInput} onChangeText={text => {this.setState({age : text})}}></TextInput>
                <TextInput placeholder="Enter your Address" style={styles.textInput} onChangeText={text => {this.setState({address : text})}}></TextInput>
                <Button title="Send Shit" onPress={this.postInfos}></Button>
                <Button title="Get Data" onPress={this.getData}></Button>

            </View>
        );
    }
    
    postInfos = () => {
        fetch('http://192.168.43.192:3001/postInfos', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name : this.state.name,
                age : this.state.age,
                address : this.state.address
            }),
        }).then(() => {
            console.error('Hello')
            Alert.alert('Data',"Données envoyées!");
        }).catch(err => Alert.alert('Error',err));
    };

    getData = () => {
        fetch('http://192.168.43.192:3001/postInfos').then(data => {console.log(data)}).catch(err => console.log(err))   
    }

}

const styles = StyleSheet.create({
    textInput : {
        borderWidth : 0.4, 
        borderColor : 'black', 
        borderStyle : 'solid',
        width : 200,
        marginBottom : 10
    }
})