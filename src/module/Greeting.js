import {Text, View} from "react-native";
import React, {Component} from "react";

class Greeting extends Component {

    render() {
        // for(var i = 0; i < 1; i++){
        //     console.info(i)
        // }
        return (
            console.info("111111111111"),
            <Text>Hello{this.props.name}!</Text>
        );
    }
}

export default class LotsOfGreentings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexrar'/>
                <Greeting name='Rexrar2'/>
                <Greeting name='Rexrar3'/>
            </View>
        );
    }
}