import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PokeListComponent from '../components/MyPokemonList.component';
import {connect} from 'react-redux';
import {getDetailPokemon ,getCatchPokemon, removePokemon} from '../state/thunks/common.thunks';
import {result} from 'lodash';
import * as actionCreators from '../state/actions/index.actions';

class PokeListPage extends Component {
  static propTypes = {
    prop: PropTypes,
    myPokemenList:PropTypes.array,
    detailPokemon: PropTypes.func,
    showSpinner: PropTypes.func,
    hideSpinner: PropTypes.func,
    pokeList: PropTypes.object,
    getCatchPokemon: PropTypes.func,
    removePokemon: PropTypes.func
  }
  constructor(props){
    super(props);
    this.state = {number:1}
  }

  render() {
    const{myPokemenList, detailPokemon, history, hideSpinner, showSpinner, pokeList, getCatchPokemon, removePokemon}= this.props;
    return (
      <div>
        <PokeListComponent myPokemenList={myPokemenList} detailPokemon={detailPokemon} history={history} 
        hideSpinner={hideSpinner} showSpinner={showSpinner} pokeList={pokeList} getCatchPokemon={getCatchPokemon} removePokemon={removePokemon}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  detailPokemon:(data,history) => dispatch(getDetailPokemon(data,history)),
  showSpinner:() => dispatch(actionCreators.showSpinner()),
  hideSpinner:() => dispatch(actionCreators.hideSpinner()),
  getCatchPokemon:(data) => dispatch(getCatchPokemon(data)),
  removePokemon: (deletePoke, allpoke) => dispatch(removePokemon(deletePoke, allpoke)),
});
const mapStateToProps = (state) => ({
myPokemenList: result(state, 'myPokemenList', []),
pokeList: result(state, 'pokemonList', [])
});

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(PokeListPage);

export default ConnectedPage;
