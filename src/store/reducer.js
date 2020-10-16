import {
    SELECT_USER
} from './actionsType';


const initialState = {
    user: '',
}

 const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECT_USER:
            return { ...state, user: action.payload };


    }
    return state;
};



export default reducer;



