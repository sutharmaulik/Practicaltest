// npm install --save react-native-web-service-handler

import API from './API';
import NetInfo from '@react-native-community/netinfo';
import WebServiceHandler from 'react-native-web-service-handler';
import axios from "axios";

var APIlink = 'https://reqres.in/api/users?page=2';


export const homeData = (value) => {
    console.log("API call", value)

    return fetch(API.mainurl + 'login', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + global.token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("API RESPONCE---->", responseJson);
            return responseJson
        })
        .catch((error) => {
            console.log('error API===>', error)
        });

    // return axios.request({
    //     method: "get",
    //     url: APIlink
    // });
};
export const ProfileSagaAPI = (value) => {
    console.log("API call", value)

    return fetch(API.GetArtistDashboard, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + global.token,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log("API RESPONCE---->", responseJson);
            return responseJson
        })
        .catch((error) => {
            console.log('error API===>', error)
        });

    // return axios.request({
    //     method: "get",
    //     url: APIlink
    // });
};