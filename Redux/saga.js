import { all } from 'redux-saga/effects';
import { homeSaga } from '../Redux/Login/saga';
import { ProfileSaga } from '../Redux/Profile/saga';
export function* rootSaga() {
    return yield all([
        homeSaga(),
        ProfileSaga()
    ]);
}
