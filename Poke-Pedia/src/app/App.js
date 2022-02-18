import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Routes from '../routes/index';
import {
  BrowserRouter
} from 'react-router-dom';
import {storageKeys,getPokeList ,getPokeDetail} from '../utils/storage.util';
import { isEmpty, result, size} from 'lodash';
import Spinner from '../components/Modal/SpinnerOverlay.component.js';

import {Snackbar } from '@material-ui/core';
import * as actionCreators from '../state/actions/index.actions';
import './App.css';
import styles from './App.style';

import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
});

class App extends Component {
  static propTypes = {
    cartUniversal: PropTypes.array,
    showSpinner: PropTypes.bool,
    searching: PropTypes.func,
    sinarmasAlert: PropTypes.object,
    savePoke: PropTypes.func,
    getFromStorage: PropTypes.func
  }

  componentDidUpdate(props) {

  }

  onNavStateChange = () => {
    const isRN = !isEmpty(result(window, 'ReactNativeWebView', {}));
    if (isRN) {
      //biar di native bisa check canGoBack;
      window.ReactNativeWebView.postMessage('navigationStateChange');
    }
  }

  onLoadingPokeListFunc(){
    client.query({
    query: gql`
      query samplePokeAPIquery {
        pokemon_v2_pokemon(where: {}, order_by: {}) {
          name
          id
          pokemon_v2_pokemonabilities(order_by: {id: asc}) {
            pokemon_v2_ability {
              name
            }
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
         }
      }
      }`
  })
  .then((response) => {
    this.props.savePoke(response);
    console.log('isisis', response);
  })
    .catch((err)=>{
    this.props.savePoke([]);
    });
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png
  }

  componentWillMount(){
    this.onLoadingPokeListFunc();
    this.props.getFromStorage();
  };

  componentDidMount() {
    ['popstate', 'hashchange', 'click'].forEach((item, index) => {
      window.addEventListener(item, this.onNavStateChange);
    });
  }

  componentWillUnmount() {
    ['popstate', 'hashchange', 'click'].forEach((item, index) => {
      window.removeEventListener(item, this.onNavStateChange);
    })
  }

  render(props) {
    const { showSpinner, errorMessage, clearErrorMessage} = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Routes style={styles.content}/>
          <Spinner showSpinner={showSpinner} />
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            onClose={clearErrorMessage}
            open={!isEmpty(errorMessage)}
            message={errorMessage}
            autoHideDuration={3000}
          />
        </BrowserRouter>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  showSpinner: result(state, 'showSpinner', false),
  nav: result(state, 'nav', {}),
  errorMessage: result(state, 'errorMessage', ''),
})

const mapDispatchToProps = (dispatch) => ({
  clearErrorMessage: () => dispatch(actionCreators.clearErrorMessage()),
  savePoke: (token) => {
    dispatch(actionCreators.savePokemonList(token));
  },
  getFromStorage:()=>{
    const datapokeDetail = getPokeDetail(storageKeys['DETAIL_POKEMON']);
    const jsonparseDetail = JSON.parse(datapokeDetail);
    const dataPokeDetail = size(jsonparseDetail) === 0 ? [] : jsonparseDetail;
    const data = getPokeList(storageKeys['MYLIST_POKEMON']);
    const jsonparse = JSON.parse(data);
    const dataPoke = size(jsonparse) === 0 ? [] : jsonparse;
    dispatch(actionCreators.savePokemonDetail(dataPokeDetail));
    dispatch(actionCreators.saveMyPokemon(dataPoke));  
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
