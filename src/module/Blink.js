import React, {Component} from 'react';
import {Text, View} from "react-native";

/**
 * 定时显示隐藏文字
 */
class Blink extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 500);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }

}

export default class BlinkApp extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
            </View>
        );
    };
}