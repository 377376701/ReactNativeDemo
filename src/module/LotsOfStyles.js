import React, {Component} from 'react'
import {View, StyleSheet, Text} from "react-native";

/**
 * 样式
 */
export default class LotsOfStyles extends Component {
    render() {
        return (
            <View style={styles.center}>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
    }
});
