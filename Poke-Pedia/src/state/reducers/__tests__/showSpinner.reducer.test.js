import spinner from '../showSpinner.reducer';
import {SPINNER_SHOW, SPINNER_HIDE} from '../../actions/index.actions';

describe('Reducer: spinner', () => {
  it('Should return default state by default', () => {
    const initialState =  false;
    expect(spinner(undefined, {})).toEqual(initialState);
  });
  it('Should do', () => {
    const previousState = [];
    const nextState = true;
    const action = {type: SPINNER_SHOW, payload: [{'test': '1234'}]};
    expect(spinner(previousState, action)).toEqual(nextState);
  });
  it('Should do', () => {
    const previousState = [{'test': '1234'}];
    const nextState = false;
    const action = {type: SPINNER_HIDE, payload: {}};
    expect(spinner(previousState, action)).toEqual(nextState);
  });
});
