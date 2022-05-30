export const ProfileDataRequest = (state, action) => {
    return {
        ...state,
        action
    }
}
export const ProfileDatasucess = (state, action) => {
    const { Data } = action
    return {
        ...state,
        Data
    }
}
export const ProfileDatafailer = (state, action) => {
    const { Datafailer } = action
    return {
        ...state,
        Datafailer
    }
}