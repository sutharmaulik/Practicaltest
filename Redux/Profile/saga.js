import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import * as actions from '../Profile/action';
import * as actionTypes from '../Profile/type';
import { ProfileSagaAPI } from '../../utils/webAPIRequest';

function* nameDataRequest(action) {
    console.log('value', action)

    try {
        const responseData = yield call(ProfileSagaAPI);
        console.log('responseData payload', responseData)
        if (responseData) {
            yield put(actions.ProfileSucess(responseData));
        }
        else {
            console.log('else')
        }
    } catch (e) {
        yield put(actions.ProfileFail(e));
    }
}

export function* ProfileSaga() {
    return yield all([
        yield takeEvery(actionTypes.PROFILEREQUEST, nameDataRequest),
    ]);
}