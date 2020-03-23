const initState = {
  count: null,
  results: [],
}

export default function pokemonArray(state = initState, action) {
  if (action.type === 'CHANGE_POKEMON_ARRAY') {
    const { count, results } = action.payload
    return {
      ...state, 
      count, 
      results,
    }
  }
  return state
}
