import React, {Component} from "react";
import {
    Image,
    StyleSheet
} from "react-native";


export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return <Image  source={pic} style={styles.container}/>
    };
}

const styles = StyleSheet.create({
    container: {
        width:110,
        height:110,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});