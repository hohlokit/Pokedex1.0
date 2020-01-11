const initState = {
  count: null,
  results: [],
}

export default function pokemonArray(state = initState, action) {
  if (action.type === 'CHANGE_POKEMON_ARRAY') {
    const { count, results } = action.payload
    return {
      ...state, //! это зачем тут?
      count, // вдруг ты добавишь другие поля в состояние, что бы оно их не удалило, а только перезаписло те что нам надо
      results,
    }
  }
  return state
}
