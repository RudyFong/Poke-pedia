import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, makeStyles} from '@material-ui/core/'
import "./PokemonList.component.style";
import {result, map, filter, size} from 'lodash';
import { withRouter } from 'react-router-dom';
import styles from './PokemonList.component.style';

const classes = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
    paper: {
      height: 140,
      width: 100,
    },
    card: {
      paddingLeft: 20
    },
}));


class categoryProduct extends Component {
    static propTypes = {
        spinnerShow: PropTypes.bool,
        spinnerHide: PropTypes.bool,
        handleSubmit: PropTypes.func,
        categoryName: PropTypes.string,
        productName: PropTypes.string,
        quantity: PropTypes.number,
        pokeList: PropTypes.object,
        detailPokemon: PropTypes.func,
        history: PropTypes.object,
        myPokemenList: PropTypes.array
    }

    constructor(props){
        super(props);
        this.state = {
        }
    };
    
    

    gotoMyPokeList(){
      this.props.history.push('/PokeListOwn');
    }

    render() {
        const {history, categoryIndex, pokeList, detailPokemon, myPokemenList
        } = this.props;
        const {quantity} = this.state;
        const PokeListData = result(pokeList, 'data.pokemon_v2_pokemon', []);
        console.log('isi', PokeListData);
        return (
          <Grid container className={classes.root}>
            <div style={styles.textconntainerTop}>
            <div style={styles.TopproductNameContainer}>
                <Button onClick={() => this.gotoMyPokeList()} style={styles.ButtonnMyList}>
                  <label style={styles.pokeListOwn}>Go to My List</label>
                </Button>
            </div>
            <div style={styles.MiddleproductNameContainer}>
              <div>
                <label style={styles.productName}>Poke-Pedia</label>
                </div> 
            </div>
            </div>
            <div style={styles.salesProductStyling}>
              <Grid spacing={2} container style={styles.listContainer}>
                {map(PokeListData, (value) => {
                  const pokeName = result(value, 'name', '');
                  const pokeID = result(value, 'id', '');
                  const ImagePoke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokeID +'.png'
                  const ownIndicatorCount = size(filter(myPokemenList, (val) => {
                    const pokeIdOwn = result(val, 'id', '');
                    return pokeIdOwn === pokeID;
                  }));
              return(
                <Grid direction={'column'} item lg={2} xs={6} style={{ padding: 0}}>
                  <div style={styles.productStyles}>
                    <div style={styles.productCard}>
                      <div>
                        <div style={{width: '100%'}}>
                          <div style={styles.imageContainer}>
                            <img id={'img-product'} src={ImagePoke} alt="image" style={styles.productImage} />
                          </div>
                          <div style={styles.productNameContainer}>
                            <label style={styles.productName}>Name : {pokeName}</label>
                          </div>
                          <div style={styles.productNameContainer}>
                            <label style={styles.productName}>Owned : {ownIndicatorCount}</label>
                          </div>
                        </div>
                      </div>
                      <div style={styles.cartButtonContainer}>
                        <Button onClick={() => detailPokemon(value, history)} style={styles.addToCartButton}>
                          Check Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
              )
            })} 
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default withRouter(categoryProduct);
