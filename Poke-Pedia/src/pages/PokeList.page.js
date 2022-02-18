import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PokeListComponent from '../components/PokemonList.component';
import {connect} from 'react-redux';
import {getDetailPokemon} from '../state/thunks/common.thunks';
import {result} from 'lodash';

class PokeListPage extends Component {
  static propTypes = {
    prop: PropTypes,
    pokeList:PropTypes.object,
    detailPokemon: PropTypes.func,
    myPokemenList: PropTypes.array
  }
  constructor(props){
    super(props);
    this.state = {number:1}
  }

  render() {
    const{pokeList, detailPokemon, history,myPokemenList}= this.props;
    return (
      <div>
        <PokeListComponent pokeList={pokeList} detailPokemon={detailPokemon} history={history} myPokemenList={myPokemenList}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  detailPokemon:(data,history) => dispatch(getDetailPokemon(data,history))
});
const mapStateToProps = (state) => ({
pokeList: result(state, 'pokemonList', []),
myPokemenList: result(state, 'myPokemenList', []),
});

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(PokeListPage);

export default ConnectedPage;
