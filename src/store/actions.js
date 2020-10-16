import {
    SELECT_USER,
    ADD_GOODS
} from './actionsType';

export const selectUser = (user) => {
    return {
        type: SELECT_USER,
        payload: user,
    };
};
export const addNewGoods = (newGoods) => {
    return {
        type: ADD_GOODS,
        payload: newGoods,
    };
};

