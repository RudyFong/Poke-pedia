import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {CLEAN_APP_STATE} from '../actions/index.actions';
import showSpinner from './showSpinner.reducer';
import errorMessage from './errorMessage.reducer';
import pokemonList from './listPokemon.reducer';
import pokemonDetail from './saveDetailPokemon.reducer';
import myPokemenList from './myListPokemon.reducer';


const appReducers = combineReducers({
	showSpinner,
	errorMessage,
  pokemonList,
  pokemonDetail,
  myPokemenList
})

const rootReducer = (state, action) => {
	if(action.type === CLEAN_APP_STATE){
		return appReducers({
		}, action)
	}
	return appReducers(state, action);
}

export default rootReducer;
