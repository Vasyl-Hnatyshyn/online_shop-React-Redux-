import {
      SELECT_USER
} from './actionsType';

export const selectUser = (user) => {
    return {
        type: SELECT_USER,
        payload: user,
    };
};

