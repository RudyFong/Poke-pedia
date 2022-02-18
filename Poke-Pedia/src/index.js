import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

import * as serviceWorker from './serviceWorker';
import {initStore} from './state/store.js';
import rootReducer from './state/reducers/index' 
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import {createBrowserHistory} from 'history'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
});

const middleWare = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require(`redux-logger`);
  middleWare.push(logger);
}

const storeEnhancers = applyMiddleware (...middleWare);
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = initStore();


const store = createStore (
  rootReducer,
  reduxDevTools(storeEnhancers),
);


const history = createBrowserHistory();

ReactDOM.render (
  <BrowserRouter history = {history}>
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
    </ApolloProvider>
  </BrowserRouter>
,

// ReactDOM.render(webstore, document.getElementById('root'))
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
