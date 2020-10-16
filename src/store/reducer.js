import {
    SELECT_USER
} from './actionsType';


const initialState = {
    user: '',
    goodsData:[{
        id:'1',
        title:'title1',
        img:'',
        description:'description'

    },{
        id:'2',
        title:'title2',
        img:'',
        description:'description2'

    },{
        id:'3',
        title:'title3',
        img:'',
        description:'description3'

    },]

}

 const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECT_USER:
            return { ...state, user: action.payload };


    }
    return state;
};



export default reducer;



