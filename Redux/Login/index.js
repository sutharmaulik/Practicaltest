import * as actionTypes from './type';
import * as reducer from './reducers';
const initialState = {
    nameDataError: undefined,
    nameData: null,
};
function nameReducer(state = initialState, action) {
    const { type } = action;
    console.log('State nameDataSuccess', state)
    switch (type) {
        case actionTypes.LOGINREQUEST:
            return reducer.nameDataRequest(state, action);
        case actionTypes.LOGINSUCCESS:
            return reducer.nameDataSuccess(state, action);
        case actionTypes.LOGINFAILER:
            return reducer.nameDataFail(state, action);

        default:
            return state;
    }
}

export default nameReducer;