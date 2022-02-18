import { SAVE_DETAIL_POKEMON, CLEAR_DETAIL_POKEMON } from '../actions/index.actions';

export default function alfacartCheckstockDetail(state = {}, action) {
    switch (action.type) {
        case SAVE_DETAIL_POKEMON: {
            return action.payload;
        }
        case CLEAR_DETAIL_POKEMON: {
            return {}
        }
        default: {
            return state;
        }
    }
}