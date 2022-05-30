export const nameDataRequest = (state, action) => {
    const { nameData } = action;
    console.log('nameData', action)
    return {
        ...state,
        action,
    };
};

export const nameDataSuccess = (state, action) => {
    console.log('action,action', action)
    const { nameData } = action;
    return {
        ...state,
        nameData,
    };
};

export const nameDataFail = (state, action) => {
    const { nameDataError } = action;
    return {
        ...state,
        nameDataError,
    };
};