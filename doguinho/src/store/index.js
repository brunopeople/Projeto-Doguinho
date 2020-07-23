import {createStore, applyMiddleWare, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas/index';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const composeEnhacers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = create(reducer,
    composeEnhacers(
        applyMiddleWare(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;