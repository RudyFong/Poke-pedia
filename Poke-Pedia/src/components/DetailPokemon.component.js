import React, { Component} from 'react'
import {Grid, Button} from '@material-ui/core';
import styles from './DetailPokemon.component.style';
import './DetailPokemon.component.style';
import {result, size, filter, map} from 'lodash';

import {withRouter} from 'react-router-dom';

class detailProductComponent extends Component{

  state = {
    visible: false,
    quantity: 1,
    activeTab: 0,
    product: {},
  }

  goBack(){
    this.props.history.push('/PokeList');
  }

render(){
    const {pokemonDetail, myPokemenList} = this.props;
    const pokemonName = result(pokemonDetail, 'name', '');
    const pokeID = result(pokemonDetail, 'id', '');
    const ImagePoke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokeID +'.png';

   const ownPokeList = size(filter(myPokemenList, (val) => {
    const ownListId = result(val, 'id', '');
    return ownListId === pokeID;
  }));
  const pokemonType = result(pokemonDetail, 'pokemon_v2_pokemontypes', []);
  const pokemonAbility = result(pokemonDetail, 'pokemon_v2_pokemonabilities', []);
    return (
      <Grid>
        <div style={styles.TopproductNameContainer}>
          <Button onClick={() => this.goBack()} style={styles.ButtonnMyList}>
            <label style={styles.pokeListOwn}>Go Back</label>
          </Button>
              <div style={styles.productPriceContainer}>
              <label style={styles.ownText}>Owned : {ownPokeList}</label>
            </div>
        </div>
          <div style={styles.imageContainer}>
            <img src={ImagePoke} style={styles.productImage} />     
          </div>
          <div style={styles.headerContainer}>
            <div style={styles.productNameContainer}>
              <label style={styles.productName}>Name : {pokemonName}</label>
            </div>              
          </div>
          <div style={styles.headerContainerBot}>
            <div style={styles.productNameContainer}>
              <label style={styles.productName}>Types :</label>
            </div>
                          {map(pokemonType, (value) => {
                            const pokeNameType = result(value, 'pokemon_v2_type.name', '');
                          return(
                          <div style={styles.productNameContainer}>
                            <label style={styles.productName}>- {pokeNameType}</label>
                          </div>
                          )})}               
          </div>
          <div style={styles.headerContainerBot}>
            <div style={styles.productNameContainer}>
              <label style={styles.productName}>Moves :</label>
            </div>              
                          {map(pokemonAbility, (value) => {
                            const pokeNameType = result(value, 'pokemon_v2_ability.name', '');
                          return(
                          <div style={styles.productNameContainer}>
                            <label style={styles.productName}>- {pokeNameType}</label>
                          </div>
                          )})} 
          </div>
      </Grid>

    )
  }
}

export default withRouter(detailProductComponent);