import React, {Component} from 'react'
import {View} from "react-native";

export default class FlexDirectionBasics extends Component {
    /**
     * Flex Direction
     */
    // render() {
    //     return (
    //         <View style={{flex: 1, flexDirection: 'row'}}>
    //             <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
    //             <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
    //             <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
    //         </View>
    //     );
    // }
    /**
     * Justify Content
     * @returns {*}
     */
    // render() {
    //     return (
    //         // 尝试把`justifyContent`改为`center`看看
    //         // 尝试把`flexDirection`改为`row`看看
    //         <View style={{
    //             flex: 1,
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //         }}>
    //             <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
    //             <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
    //             <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
    //         </View>
    //     );
    // }


    /**
     * Align Items
     * @returns {*}
     */
    render() {
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}