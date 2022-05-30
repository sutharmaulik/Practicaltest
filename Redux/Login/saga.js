import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as actions from '../Login/action';
import * as actionTypes from '../Login/type';
import { homeData } from '../../utils/webAPIRequest';

function* nameDataRequest(action) {
    console.log('value', action)

    try {
        const responseData = yield call(homeData, action.payload);
        console.log('responseData payload', responseData)
        if (responseData) {
            yield put(actions.nameDataSuccess(responseData));
        }
        else {
            console.log('else')
        }
    } catch (e) {
        yield put(actions.nameDataFail(e));
    }
}

export function* homeSaga() {
    return yield all([
        yield takeEvery(actionTypes.LOGINREQUEST, nameDataRequest),
    ]);
}