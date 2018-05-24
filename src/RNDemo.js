import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules
} from 'react-native';

export default class RNDemo extends Component {
    _toast() {
        NativeModules.ToastModule.show('点击了好疼啊！', 1, (success) => {
            alert(success)
        }, (error) => {
            alert(error)
        })
    }

    _uuid() {
        NativeModules.ToastModule.getuuid("1111", (uuid) => {
            console.info(uuid)
            alert(uuid)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Text onPress={this._toast} style={styles.welcome}>*/}
                {/*点我把*/}
                {/*</Text>*/}
                <Text onPress={this._uuid} style={styles.welcome}>
                    getUUID
                </Text>


            </View>
        );


    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);
