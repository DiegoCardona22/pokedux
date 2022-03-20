import './index.css';
import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import pokemonReducer from './reducers/pokemonReducer';
import pokemonSaga from './sagas';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeAlt(applyMiddleware( sagaMiddleware ))
const store = createStore( pokemonReducer, composeEnhancers );
sagaMiddleware.run(pokemonSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
