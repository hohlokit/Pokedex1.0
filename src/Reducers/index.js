import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import pokemonArray from './changePokemonArray'
import allPokemonsArray from './createAllPokemonsArray'

export default combineReducers({
  pokemonArray,
  allPokemonsArray,
  routing: routerReducer,
})
