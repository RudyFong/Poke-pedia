import errormessage from '../errorMessage.reducer';
import {SAVE_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE} from '../../actions/index.actions';

describe('Reducer: error message', () => {
  it('Should return default state by default', () => {
    const initialState =  '';
    expect(errormessage(undefined, {})).toEqual(initialState);
  });
  it('Should do', () => {
    const previousState = [];
    const nextState = [{'test': '1234'}];
    const action = {type: SAVE_ERROR_MESSAGE, payload: [{'test': '1234'}]};
    expect(errormessage(previousState, action)).toEqual(nextState);
  });
  it('Should do', () => {
    const previousState = [{'test': '1234'}];
    const nextState = '';
    const action = {type: CLEAR_ERROR_MESSAGE, payload: {}};
    expect(errormessage(previousState, action)).toEqual(nextState);
  });
});
