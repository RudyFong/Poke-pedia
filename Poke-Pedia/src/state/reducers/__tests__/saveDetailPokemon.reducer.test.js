import detailPoke from '../saveDetailPokemon.reducer';
import {SAVE_DETAIL_POKEMON, CLEAR_DETAIL_POKEMON} from '../../actions/index.actions';

describe('Reducer: detailPoke', () => {
  it('Should return default state by default', () => {
    const initialState =  {};
    expect(detailPoke(undefined, {})).toEqual(initialState);
  });
  it('Should do', () => {
    const previousState = {};
    const nextState = {'test': '1234'};
    const action = {type: SAVE_DETAIL_POKEMON, payload: {'test': '1234'}};
    expect(detailPoke(previousState, action)).toEqual(nextState);
  });
  it('Should do', () => {
    const previousState = {'test': '1234'};
    const nextState = {};
    const action = {type: CLEAR_DETAIL_POKEMON, payload: {}};
    expect(detailPoke(previousState, action)).toEqual(nextState);
  });
});
