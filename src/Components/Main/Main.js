import React, { Component } from 'react'
import { Pagination } from 'antd'
import axios from 'axios'
import PokemonItem from '../PokemonItem/PokemonItem'
import 'antd/dist/antd.css'
import './Main.scss'

export class Main extends Component {
  componentWillMount() {
    this.findPokemons()
  }

  findPokemons = (page = 1, count = 10) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/', {
        params: {
          limit: count,
          offset: (page - 1) * count,
        },
      })
      .then(response => {
        response.data.results.pokemonsCount = response.data.count
        response.data.results.forEach((element, index) => {
          element.id = (page - 1) * count + index + 1
        })
        this.props.onChangePokemonArray(response.data)
      })
  }

  onChange = (page, pageSize) => {
    this.findPokemons(page, pageSize)
  }

  render() {
    const { pokemonArray, countPokemons } = this.props
    const { onChange } = this
    return (
      <div id="page">
        <div id="allItems">
          {pokemonArray.length ? (
            pokemonArray.map(items => (
              <PokemonItem
                key={items.id}
                source={items}
                onClick={console.log('@')}
              />
            ))
          ) : (
            <div />
          )}
        </div>
        <Pagination
          showSizeChanger
          onShowSizeChange={onChange}
          defaultCurrent={1}
          total={countPokemons}
          pageSizeOptions={[10, 20, 50]}
          onChange={onChange}
        />
      </div>
    )
  }
}
