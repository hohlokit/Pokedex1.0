import { Main as MainComponent } from './Main'
import { connect } from 'react-redux'
import { changePokemonArray } from '../../Actions/changePokemonArray'
import { createAllPokemonsArray } from '../../Actions/createAllPokemonsArray'

function mapStateToProps(state) {
  return {
    pokemonArray: state.pokemonArray.results,
    countPokemons: state.pokemonArray.count,
    allPokemonsArray: state.allPokemonsArray,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangePokemonArray: pokemonArray =>
      dispatch(changePokemonArray(pokemonArray)),
    onCreateAllPokemonsArray: allPokemonsArray =>
      dispatch(createAllPokemonsArray(allPokemonsArray)),
  }
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
