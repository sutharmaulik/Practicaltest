import * as actionTypes from './type';

export const LoginRequest = (payload) => {
    console.log('action get parameter', payload)
    return {
        type: actionTypes.LOGINREQUEST,
        payload
    };
};

export const nameDataSuccess = nameData => {
    console.log('nameData', nameData)
    return {
        type: actionTypes.LOGINSUCCESS,
        nameData,
    };
};

export const nameDataFail = nameDataError => {
    return {
        type: actionTypes.LOGINFAILER,
        nameDataError,
    };
};