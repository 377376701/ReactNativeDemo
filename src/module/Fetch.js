import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, TouchableHighlight,
    View,
} from 'react-native';

export default class Fetch extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor='rgb(210,260,260)'
                    style={{padding: 10, marginTop: 10, borderRadius: 5,}}
                    onPress={this.get}
                >
                    <Text>get请求</Text>
                </TouchableHighlight>
            </View>
        );
    }

    get() {
        fetch('http://api.expoon.com/AppNews/getNewsList/type/1/p/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())//1
            .then((jsonData) => {//2
                // let country = jsonData.data.country;

                let status = jsonData.status;
                let info = jsonData.info;
                let newsId = jsonData.data[0].news_id;
                // alert("country:" + country + "-------city:" + city);
                console.log("xxffff", jsonData);
                console.log("xxffff", "newsId:" + newsId);
                console.log("xxffff", "status:" + status);
                console.log("xxffff", "info:" + info);
            });
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
});