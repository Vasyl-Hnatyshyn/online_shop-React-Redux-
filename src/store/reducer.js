import {
    SELECT_USER,
    ADD_GOODS
} from './actionsType';


const initialState = {
    user: '',
    goodsData:[]
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECT_USER:
            return { ...state, user: action.payload };

        case ADD_GOODS:
            return { ...state, goodsData: action.payload };


    }
    return state;
};



export default reducer;



