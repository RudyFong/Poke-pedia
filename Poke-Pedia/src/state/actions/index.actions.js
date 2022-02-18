import {createAction} from 'redux-actions';

// ==================
//  ACTION CONSTANTS
// ==================
// FEEDBACK Action constants

// CLEAN REDUX STATE
export const CLEAN_APP_STATE = 'CLEAN_APP_STATE';

export const SPINNER_SHOW = 'SPINNER_SHOW';
export const SPINNER_HIDE = 'SPINNER_HIDE';

export const SAVE_ERROR_MESSAGE = 'SAVE_ERROR_MESSAGE';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_SEARCH_MESSAGE';

export const SAVE_POKEMON_LIST = "SAVE_POKEMON_LIST";
export const CLEAR_POKEMON_LIST = "CLEAR_POKEMON_LIST";

export const SAVE_DETAIL_POKEMON ='SAVE_DETAIL_POKEMON';
export const CLEAR_DETAIL_POKEMON= 'CLEAR_DETAIL_POKEMON';

export const SAVE_MY_POKEMON_LIST ='SAVE_MY_POKEMON_LIST';
export const CLEAR_MY_POKEMON_LIST ='CLEAR_MY_POKEMON_LIST';

// =================
//  ACTION CREATORS
// =================


// CLEAN REDUX STATE action creators
export const cleanAppState = createAction(CLEAN_APP_STATE);

export const showSpinner = createAction(SPINNER_SHOW);
export const hideSpinner = createAction(SPINNER_HIDE);

export const saveErrorMessage = createAction(SAVE_ERROR_MESSAGE);
export const clearErrorMessage = createAction(CLEAR_ERROR_MESSAGE);

export const savePokemonList = createAction(SAVE_POKEMON_LIST);
export const clearPokemonList = createAction(CLEAR_POKEMON_LIST);

export const savePokemonDetail = createAction(SAVE_DETAIL_POKEMON);
export const clearPokemonDetail = createAction(CLEAR_DETAIL_POKEMON);

export const saveMyPokemon = createAction(SAVE_MY_POKEMON_LIST);
export const clearMyPokemon = createAction(CLEAR_MY_POKEMON_LIST);