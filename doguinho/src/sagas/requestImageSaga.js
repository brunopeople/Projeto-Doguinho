import {call, put} from "redux-saga/effects";
import { fetchImageAPI } from "../api/fetchImageAPI";
import { receiveImage } from '../store/actions';

export default function* requestImageSaga(action){
    try {
        const data = yield call(fetchImageAPI);
        yield put(receiveImage(data));

    }catch(e){
        
    }
}