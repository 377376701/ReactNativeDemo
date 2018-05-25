import {
    API_HOST,
} from '../config/'
import FlyMD5 from "../utils/FlyMD5";
import {NativeModules} from "react-native";

const fetchAction = (...props) => {
    return new Promise((resolve, reject) => {
        //获取第一个元素，也就api地址
        let url = props.shift(1)
        //获取请求里面的属性，包括头部信息
        let options = props.shift(1) || {}
        //获取元素后，向原生发送请求获取这次请求的token内容
        //进行网络请求
        let method = options.method;
        let formData = options.body
        console.log("requestUrl:" + url)
        console.log("requestData:" + JSON.stringify(formData))
        //向原生发出获取token请求

        NativeModules.MyMainModule.getuuid((uuid) => {
            formData['uuid'] = uuid;
            let token = auth(formData);
            console.log("requestHead:" + token)
            fetch(url, {
                method: method,
                headers: {
                    'access-token': token,
                    'kye': '10002',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then((response) => {
                return response.json()
            }).then((responseJson) => {
                console.log("responseData:" + JSON.stringify(responseJson))
                resolve(responseJson)
            }).catch(err => {
                reject(err)
            })
        });


        // NativeModules.MyMainModule.getAccessTokenWithDict(
        //     formData, (msg) => {
        //         console.log(msg);
        //     },
        //     (token) => {
        //         console.log("requestHead_native:" + token)

        //     }
        // );

    })
}


export const KyeRequst = (url, data) => {
    return fetchAction(`${API_HOST}` + url, {
        method: 'POST',
        body: data,
    });
}


/**
 * 鉴权函数
 * @param formData
 */
const auth = (formData) => {
    let k = 'NDB4SD45D2D8EC868CF1074F9EFAC624589E3A'
    let key = k.substring(6)

    let list = jsonToArray(JSON.stringify(formData));
    list.sort();
    for (var i = 0; i < list.length; i++) {
        var kkk = list[i];
        var value = formData[kkk]
        console.log(kkk + "==" + value)
        if (value != null && value != undefined && value.toString().trim() != '') {
            key += kkk + value;
        }
    }
    console.log(key);
    let hex_md5v = FlyMD5.md5(key);
    console.log(hex_md5v)
    return hex_md5v.toString().toUpperCase();
}

const jsonToArray = (str) => {
    const obj = JSON.parse(str);
    const result = [];
    for (let key in obj) {
        result.push(key);
    }
    return result;

}

