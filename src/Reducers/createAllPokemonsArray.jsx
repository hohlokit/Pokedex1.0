const initState = null

export default function createAllPokemonsArray(state = initState, action) {
  if (action.type === 'CREATE_ALL_POKEMONS_ARRAY') {
    // debugger
    // const allPokemons = [...]
    return action.payload
  }
  return state
}
