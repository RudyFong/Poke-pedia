import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DetailPoke from '../components/DetailPokemon.component';
import {connect} from 'react-redux';
import {result} from 'lodash';
import * as actionCreators from '../state/actions/index.actions';


class detailPokePage extends Component {
  static propTypes = {
    prop: PropTypes,
    pokemonDetail: PropTypes.object,
    myPokemenList: PropTypes.array
  }

  componentDidMount () {
       const{showSpinner, hideSpinner} = this.props;
       showSpinner();
       hideSpinner();
  }

  render() {
    const {pokemonDetail, history, myPokemenList
    } = this.props;

    return (
      <div>
        <DetailPoke pokemonDetail={pokemonDetail} history={history}myPokemenList={myPokemenList}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  showSpinner: () => dispatch(actionCreators.showSpinner()),
  hideSpinner: () => dispatch(actionCreators.hideSpinner()),

});
const mapStateToProps = (state) => ({
  pokemonDetail: result(state, 'pokemonDetail', ''),
  myPokemenList: result(state, 'myPokemenList', []),
});

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(detailPokePage);

export default ConnectedPage;
