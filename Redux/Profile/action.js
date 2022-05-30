import * as actionTypes from './type';

export const Profilerequest = (payload) => {
    console.log('action get parameter', payload)
    return {
        type: actionTypes.PROFILEREQUEST,
        payload
    };
};

export const ProfileSucess = nameData => {
    console.log('nameData', nameData)
    return {
        type: actionTypes.PROFILESUCCESS,
        nameData,
    };
};

export const ProfileFail = nameDataError => {
    return {
        type: actionTypes.ProfileFail,
        nameDataError,
    };
};