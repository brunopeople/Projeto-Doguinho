import {call, put} from "redux-saga/effects";
import { fetchBreedListAPI } from "../api/fetchBreedListAPI";
import { receiveBreeds } from '../store/actions';

export default function requestBreedsSaga(action){
    try {
        const data = yield call(fetchBreedListAPI);
        yield put(receiveBreeds(data));
    } catch(e){
        
    }
}