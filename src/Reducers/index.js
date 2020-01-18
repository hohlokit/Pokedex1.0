import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux'

import pokemonArray from './changePokemonArray';

export default combineReducers({
    pokemonArray,
    routing: routerReducer
});