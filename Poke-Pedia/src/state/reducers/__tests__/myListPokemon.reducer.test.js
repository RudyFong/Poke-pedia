import pokemonList from '../myListPokemon.reducer';
import {SAVE_MY_POKEMON_LIST, CLEAR_MY_POKEMON_LIST} from '../../actions/index.actions';

describe('Reducer: pokemonList', () => {
  it('Should return default state by default', () => {
    const initialState =  [];
    expect(pokemonList(undefined, {})).toEqual(initialState);
  });
  it('Should do', () => {
    const previousState = [];
    const nextState = [{'test': '1234'}];
    const action = {type: SAVE_MY_POKEMON_LIST, payload: [{'test': '1234'}]};
    expect(pokemonList(previousState, action)).toEqual(nextState);
  });
  it('Should do', () => {
    const previousState = [{'test': '1234'}];
    const nextState = [];
    const action = {type: CLEAR_MY_POKEMON_LIST, payload: {}};
    expect(pokemonList(previousState, action)).toEqual(nextState);
  });
});
