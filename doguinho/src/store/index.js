import {createStore, applyMiddleWare, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas/index';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,
    composeEnhancers(
        applyMiddleWare(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;