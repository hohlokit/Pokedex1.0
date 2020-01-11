import { Main as MainComponent } from './Main'
import { connect } from 'react-redux'
import { changePokemonArray } from '../../Actions/changePokemonArray'

// сюда передаем параметры которые у нас будут доступны пропсами у компонента
function mapStateToProps(state) {
  return {
    pokemonArray: state.pokemonArray.results,
    countPokemons: state.pokemonArray.count,
  }
}

// сюда передаем функции,  который будут экшенами
function mapDispatchToProps(dispatch) {
  return {
    onChangePokemonArray: pokemonArray =>
      dispatch(changePokemonArray(pokemonArray)),
  }
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
