import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button, Grid, makeStyles, TextField} from '@material-ui/core/'
import "./MyPokemonList.component.style";
import {result, map, filter, size, random, sortBy, noop} from 'lodash';
import { withRouter} from 'react-router-dom';
import styles from './MyPokemonList.component.style';


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



class mylistPoke extends Component {
    static propTypes = {
        spinnerShow: PropTypes.bool,
        spinnerHide: PropTypes.bool,
        handleSubmit: PropTypes.func,
        categoryName: PropTypes.string,
        productName: PropTypes.string,
        quantity: PropTypes.number,
        myPokemenList: PropTypes.array,
        detailPokemon: PropTypes.func,
        history: PropTypes.object,
        showSpinner: PropTypes.func,
        hideSpinner: PropTypes.func,
        pokeList: PropTypes.object,
        getCatchPokemon: PropTypes.func,
        removePokemon: PropTypes.func
    }

    constructor(props){
        super(props);
        this.state = {
            visible: false,
            show: false,
            newPokemon: {},
            visibleTabFail: false,
            errorMessageNickName: false,
            visibleTabRemove: false,
            deletePoke: {}
        }
    };

    
  handleNameChange(name){
    const {myPokemenList} = this.props;
    const checkNickname = filter(myPokemenList, (val) => {
        const myPokemenList = result(val, 'nickname', '');
        return myPokemenList === name;
    });
      if (size(checkNickname) === 0){
    this.setState({errorMessageNickName: false});
      }else{
        this.setState({errorMessageNickName: true});
      }
    this.setState({nickname: name});
  }

    showCatchModal = () => {
      const {myPokemenList = []} = this.props;
      const buttonDisabled = this.state.nickname === '' || this.state.errorMessageNickName;
      const pokeID = result(this.state.newPokemon, 'id', '');
      const ImagePoke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokeID +'.png'
      const pokemonType = result(this.state.newPokemon, 'pokemon_v2_pokemontypes', []);
      return (
        <div style={styles.addToCartModal}>
          <div style={styles.modalContentContainer}>
            <label style={styles.headerTitle}>Pokemon catch! Congrats!</label>
            <div style={styles.modalDetailContainer}>
              <img src={ImagePoke} style={styles.modalImage}></img>
              <div>
                <label style={styles.modalProductName}>{result(this.state.newPokemon, 'name', '')}</label>
              </div>
            </div>
            
            <div style={styles.greyLine}/>
            <label style={styles.quantityText}>Type</label>
     
                          {map(pokemonType, (value) => {
                            const pokeNameType = result(value, 'pokemon_v2_type.name', '');
                          return(
                  
                            <label style={styles.typeText}>- {pokeNameType}</label>
                   
                          )})} 
            <div style={styles.greyLine}/>
            <div className="form-field" style={styles.inputName}>
              <div>
              <label style={styles.quantityText}>Give Your Pokemon Nickname (ex. 'coral')</label>
              </div>
              <TextField
                id="outlined-name"
                label="Nickname"
                onChange={(e) => this.handleNameChange(e.target.value) }
                style={styles.inputTextName}
              />
            </div>
                        {this.state.errorMessageNickName && <label style={styles.nicknamebanner}>Nickname Already Taken</label>}
            <div style={styles.cartButtonContainerCatch}>
              <Button style={buttonDisabled ? styles.modalCartButtonDisabled : styles.modalCartButton} type="submit"  disabled={buttonDisabled} onClick={() => {this.getCatchPokemon(myPokemenList,{...this.state.newPokemon, nickname : this.state.nickname})}}>
                Add to List
              </Button>
            </div>
        </div>
        </div>
      )
    }

    showRemoveModal = () => {
      const {myPokemenList = []} = this.props;
      const pokeID = result(this.state.deletePoke, 'id', '');
      const ImagePoke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokeID +'.png'
      return (
        <div style={styles.addToCartModal}>
          <div style={styles.modalContentContainer}>
            <label style={styles.headerTitle}>Are you want delete this poke?</label>
            <div style={styles.modalDetailContainer}>
              <img src={ImagePoke} style={styles.modalImage}></img>
              <div>
                <label style={styles.modalProductName}>{result(this.state.deletePoke, 'name', '')}</label>
              </div>
            </div>
            <div style={styles.greyLine}/>
            <label style={styles.quantityText}>Nickname : {result(this.state.deletePoke, 'nickname', '')}</label>

            <div style={styles.cartButtonContainerDelete}>
              <Button style={styles.modalButtonDelete} type="submit" onClick={() => this.onCloseremoveExecute(this.state.deletePoke, myPokemenList)}>
                Delete
              </Button>
              <Button style={styles.modalButtonDelete} type="submit" onClick={() => this.onCloseremove()}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )
    }

    showCatchFailModal = () => {

      return (
        <div style={styles.addToCartModal}>
          <div style={styles.modalContentContainer}>
            <label style={styles.headerTitle}>Catch Fail!!!!</label>
            <div style={styles.modalDetailContainer}>
              <div>
                <label style={styles.modalProductName}>Sorry fail to catch any pokemon..... :(</label>
              </div>
            </div>
            <div style={styles.cartButtonContainer}>
              <Button style={styles.modalCartButton} type="submit" onClick={() => this.onCloseFail()}>
                close
              </Button>
            </div>
          </div>
        </div>
      )
    }

    
    onCloseremoveExecute = (deletePoke, myPokemenList) => {
      const {removePokemon = noop} = this.props;
      removePokemon(deletePoke, myPokemenList);
      this.setState({
        visibleTabRemove: false
      });
    }

    getRemovePoke(deletePoke){
      this.setState({visibleTabRemove: !this.state.visibleTabRemove});
      this.setState({
        deletePoke: deletePoke
      });
    }

    goBack(){
      const {history, detailProductFunc} = this.props;
      history.push('/PokeList');
    }
    getCatchPokemon(oldpoke , newPoke){
      this.setState({
        visible: false
      });
      this.props.getCatchPokemon([...oldpoke, newPoke]);
    }

    onClose = () => {
      this.setState({
        visible: false
      });
    }
    onCloseFail = () => {
      this.setState({
        visibleTabFail: false
      });
    }
    onCloseremove = () => {
      this.setState({
        visibleTabRemove: false
      });
    }

    goTocatchPokemon(){
      const {pokeList, showSpinner , hideSpinner, myPokemenList} = this.props;
      showSpinner();
      const randomNumberChance = random(1);
      const total = result(pokeList, 'data.pokemon_v2_pokemon.length',0) - 1;
      const randomPokemon = random(total);
      const targetPokemon = result(pokeList, `data.pokemon_v2_pokemon.${randomPokemon}`, '');
      console.log('isi pokemon', targetPokemon);
      const countPokeID = size(myPokemenList);
      const filtermyown= sortBy(myPokemenList, ['idOwn']);
      const targetPokemonID = result(filtermyown, `${countPokeID - 1}.idOwn`, 0);
      const idOwn = countPokeID === 0 ? 10000000 : 1 + targetPokemonID;
      this.setState({newPokemon: {...targetPokemon, idOwn}, nickname: ''});
      
      console.log('siisis', total);    

      setTimeout(() => {
        hideSpinner();
      }, 1500);
      if(randomNumberChance === 1){
      this.setState({visible: !this.state.visible});
      console.log('this', this.state);
      }else{
      this.setState({visibleTabFail: !this.state.visibleTabFail});
      }
    }

    render() {
        const {history, myPokemenList
        } = this.props;
        const countPoke = size(myPokemenList);
        return (
          <Grid container className={classes.root}>
            <div style={styles.textconntainerTop}>
            <div style={styles.TopproductNameContainer}>
                <Button onClick={() => this.goBack()} style={styles.ButtonnMyList}>
                  <label style={styles.pokeListOwn}>Go Back</label>
                </Button>
            </div>
            <div style={styles.MiddleproductNameContainer}>
              <div>
                <label style={styles.productName}>My List Poke</label>
                </div> 
            </div>
            </div>
            <div style={styles.salesProductStyling}>
              {countPoke === 0 ?
            <div style={styles.dontHavePoke}>
              <div>
                <label style={styles.productName}>Dont have poke</label>
                </div> 
            </div>
              :
              <Grid spacing={2} container style={styles.listContainer}>
                {map(myPokemenList, (value) => {
                  const pokeName = result(value, 'name', '');
                  const pokeNickName = result(value, 'nickname', '');
                  const pokeID = result(value, 'id', '');
                  const ImagePoke = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ pokeID +'.png'
                  const pokemonType = result(value, 'pokemon_v2_pokemontypes', []);
              return(
                <Grid item lg={2} xs={6} style={{ padding: 0}}>
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
                            <label style={styles.productNickName}>Nickname : {pokeNickName}</label>
                          </div>
                          <div style={styles.productNameContainer}>
                            <label style={styles.productName}>PokeType :</label>
                          </div>
                          {map(pokemonType, (value) => {
                            const pokeNameType = result(value, 'pokemon_v2_type.name', '');
                          return(
                          <div style={styles.productNameContainer}>
                            <label style={styles.productName}>- {pokeNameType}</label>
                          </div>
                          )})} 
                        </div>
                      </div>
                      <div style={styles.cartButtonContainer}>
                        <Button onClick={() => this.getRemovePoke(value)} style={styles.addToCartButton}>
                          Release / Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
              )
            })} 
          </Grid>
          }
        </div>
        <div style={styles.cartButtonContainer}>
          <Button onClick={() => this.goTocatchPokemon()} style={styles.addToCartButton}>
            Catch Pokemon
          </Button>
        </div>
        {this.state.visible ? this.showCatchModal() : null}
        {this.state.visibleTabFail ? this.showCatchFailModal() : null}
        {this.state.visibleTabRemove ? this.showRemoveModal() : null}
      </Grid>
    );
  }
}

export default withRouter(mylistPoke);
