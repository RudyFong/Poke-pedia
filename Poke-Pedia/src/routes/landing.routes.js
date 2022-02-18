import React from 'react'
import {Route, Switch, useParams} from 'react-router-dom';

import PokeList from '../pages/PokeList.page';
import PokeDetail from '../pages/DetailPokemon.page';
import PokeListOwn from '../pages/MyPokemonList.page';

const LandingRoute= (props) => {
  const params = useParams();
  return (
      <Switch>
        <Route path="/PokeList" component={PokeList}/>
        <Route path="/PokeDetail" component={PokeDetail}/>
        <Route path="/PokeListOwn" component={PokeListOwn}/>
      </Switch>
)};

export default LandingRoute;