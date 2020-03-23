import { CREATE_ALL_POKEMONS_ARRAY } from '../constants/action.type'

export const createAllPokemonsArray = allPokemonsArray => {
  return {
    type: CREATE_ALL_POKEMONS_ARRAY,
    payload: allPokemonsArray,
  }
}
