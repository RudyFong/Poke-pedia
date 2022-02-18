import * as actionCreators from '../actions/index.actions.js';
import {result, filter} from 'lodash';
import { setPokeList, storageKeys ,setPokeDetail} from '../../utils/storage.util';

  export function getDetailPokemon (data, history) {
    return (dispatch) => {
      dispatch(actionCreators.savePokemonDetail(data));
      setPokeDetail(storageKeys['DETAIL_POKEMON'], data);   
      history.push('/PokeDetail');
    };
  }

  export function getCatchPokemon (data) {
    return (dispatch) => {
      console.log('ididi', data);
      dispatch(actionCreators.showSpinner()); 
      dispatch(actionCreators.saveMyPokemon(data));  
      setPokeList(storageKeys['MYLIST_POKEMON'], data);   
      setTimeout(() => {
        dispatch(actionCreators.hideSpinner());
      }, 1500);
    };
  }

  export function removePokemon (dataDelete, allPoke) {
    return (dispatch) => {
      const remainData = filter(allPoke, (val) => {
        const myPokemenList = result(val, 'idOwn', '');
        return myPokemenList !== result(dataDelete, 'idOwn', '');
      });
      dispatch(actionCreators.showSpinner()); 
      dispatch(actionCreators.saveMyPokemon(remainData));  
      setPokeList(storageKeys['MYLIST_POKEMON'], remainData);   
      setTimeout(() => {
        dispatch(actionCreators.hideSpinner());
      }, 1500);
    };
  }