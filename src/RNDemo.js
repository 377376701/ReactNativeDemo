import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules, ScrollView
} from 'react-native';
import Row from "./components/Row";

export default class RNDemo extends Component {
    _toast() {
        NativeModules.ToastModule.show('点击了好疼啊！', 1, (success) => {
            alert(success)
        }, (error) => {
            alert(error)
        })
    }

    _uuid () {
        NativeModules.ToastModule.getuuid("1111",(uuid) => {
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

        // return (
        //     <ScrollView style={styles.container}>
        //         <Row title={'Toggle Drawer'} onPress={this.toggleDrawer}/>
        //         <Row title={'Push Screen'} testID={'pushScreen'} onPress={this.pushScreen}/>
        //         <Row
        //             ref={(ref) => (this.previewRef = ref)}
        //             title={'Preview Screen'}
        //             testID={'previewScreen'}
        //             onPress={this.pushScreen}
        //             onPressIn={this.previewScreen}
        //         />
        //         {/*<Row title={'Push List Screen'} testID={'pushListScreen'} onPress={this.pushListScreen}/>*/}
        //         <Row title={'Custom TopBar'} onPress={this.pushCustomTopBarScreen}/>
        //         <Row title={'Custom Button'} onPress={this.pushCustomButtonScreen}/>
        //         <Row title={'Top Tabs Screen'} onPress={this.pushTopTabsScreen} platform={'android'}/>
        //         <Row title={'Show Modal'} onPress={this.showModal}/>
        //         <Row title={'Show Lightbox'} onPress={this.showLightBox}/>
        //         <Row title={'Show In-App Notification'} onPress={this.showInAppNotification}/>
        //     </ScrollView>
        // );
    }
}

const styles = StyleSheet.create({
    // container: {
    //
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#F5FCFF',
    // },

    container: {
        flex: 1,
    },
    row: {
        height: 48,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },
    text: {
        fontSize: 16,
    },
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);
