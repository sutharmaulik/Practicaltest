import * as actionTypes from './type';
import * as reducer from './reducer';
const initialState = {
    nameDataError: undefined,
    nameData: null,
};
function ProfileReucer(state = initialState, action) {
    const { type } = action;
    console.log('State nameDataSuccess', state)
    switch (type) {
        case actionTypes.PROFILEREQUEST:
            return reducer.ProfileDataRequest(state, action);
        case actionTypes.PROFILESUCCESS:
            return reducer.ProfileDatasucess(state, action);
        case actionTypes.PRFILEFAILER:
            return reducer.ProfileDatafailer(state, action);

        default:
            return state;
    }
}

export default ProfileReucer;