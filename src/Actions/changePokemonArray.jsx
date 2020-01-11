import { CHANGE_POKEMON_ARRAY } from '../constants/action.type'

export const changePokemonArray = pokemonArray => {
  return {
    type: CHANGE_POKEMON_ARRAY,
    payload: pokemonArray,
  }
}

