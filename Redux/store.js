import { applyMiddleware, combineReducers, createStore } from 'redux';
import nameReducer from '../Redux/Login/index';
import ProfileReucer from '../Redux/Profile/index';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { rootSaga } from './saga';

let initialState = {};
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, createLogger()];

const appReducer = combineReducers({
    nameReducer,
    ProfileReucer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export const store = createStore(rootReducer, initialState, applyMiddleware(...middleware),);


sagaMiddleware.run(rootSaga);
