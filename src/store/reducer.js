import {
    SELECT_USER,
    ADD_GOODS
} from './actionsType';


const initialState = {
    user: '',
    goodsData:[{
        id:'1',
        title:'title1',
        img:'',
        description:'description',
        price:200

    },{
        id:'2',
        title:'title2',
        img:'',
        description:'description2',
        price:350,

    },{
        id:'3',
        title:'title3',
        img:'',
        description:'description3',
        price:175,

    },]

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



