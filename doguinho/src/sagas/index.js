import {takeEvery, all} from "redux-saga/effects";
import {FETCH_BREEDS, FETCH_IMAGE} from "../store.actions";
import requestBreedsListSaga from "./requestBreedsListSaga";
import requestImageSaga from "./requestImageSaga";

function fetch(){
    yield takeEvery(FETCH_BREEDS, requestBreedsListSaga);
    yield takeEvery(FETCH_IMAGE, requestImageSaga);
}

export default function* rootSaga(){
    yield all([
        fetch()
    ]);
}