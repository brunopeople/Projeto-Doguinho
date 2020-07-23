import * as actionTypes from './actions';
const customImage = './assets/custom.jpg';

const initialState = {
    breedList: [],
    selectedBreed: "",
    imageUrl: customImage,
    error: false

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.RECEIVE_BREEDS:
        return{
            ...state,
            breedList: action.payload
        }

        case actionTypes.SELECT_BREED:
            return{
                ...state,
                imageUrl: action.payload
            }
        
        default:
            return state;
    }
}

export default reducer