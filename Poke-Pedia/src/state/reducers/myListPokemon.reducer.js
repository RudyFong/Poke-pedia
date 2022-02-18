import {SAVE_MY_POKEMON_LIST, CLEAR_MY_POKEMON_LIST} from '../actions/index.actions';

export default function myPokemonList (state = [], action) {
  switch (action.type) {
  case SAVE_MY_POKEMON_LIST: {
    return action.payload;
  }
  case CLEAR_MY_POKEMON_LIST: {
    return [];
  }
  default: {
    return state;
  }
  }
}
