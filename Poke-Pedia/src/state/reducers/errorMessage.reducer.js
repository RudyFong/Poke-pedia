import { SAVE_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from '../actions/index.actions';

export default function errorMessage(state = '', action) {
    switch (action.type) {
        case SAVE_ERROR_MESSAGE: {
            return action.payload;
        }
        case CLEAR_ERROR_MESSAGE: {
            return '';
        }
        default: {
            return state;
        }
    }
}
