import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Pagination, Input } from 'antd'
import axios from 'axios'
import PokemonItem from '../PokemonItem'
import 'antd/dist/antd.css'
import './Main.scss'

const { Search } = Input

export class Main extends Component {
  state = {
    value: '',
    isFindActive: false,
    foundedPokemons: [],
  }
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
          let temp = element.url.slice(0, -1)
          element.id = temp.slice(temp.lastIndexOf('/') + 1)
        })
        this.props.onChangePokemonArray(response.data)
      })
  }

  onChange1 = (page, pageSize) => {
    this.findPokemons(page, pageSize)
  }

  handleKeyDown = e => {
    if (!this.props.allPokemonsArray) this.startFind()
    if (e.keyCode === 13) this.findInArray(this.state.value)
  }

  startFind = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${this.props.countPokemons}`,
      )
      .then(response => {
        this.props.onCreateAllPokemonsArray(response.data.results)
      })
  }

  findInArray = pokemon => {
    this.setState({ isFindActive: true })
    let tempPokemon = []
    this.props.allPokemonsArray.filter(el => {
      if (el.name.includes(pokemon) === true) {
        let temp = el.url.slice(0, -1)
        el.id = temp.slice(temp.lastIndexOf('/') + 1)
        tempPokemon.push(el)
        this.setState({ foundedPokemons: tempPokemon })
        const infoObj = {
          results: tempPokemon,
        }
        this.props.onChangePokemonArray(infoObj)
      }
    })
  }

  render() {
    const { pokemonArray, countPokemons, history } = this.props
    const { findInArray, handleKeyDown, onChange1 } = this
    return (
      <div id="page">
        <Search
          placeholder="input search text"
          onSearch={findInArray}
          enterButton
          onChange={e => this.setState({ value: e.target.value })}
          value={this.state.value}
          onKeyDown={handleKeyDown}
        />

        <div id="allItems">
          {pokemonArray.length ? (
            pokemonArray.map(items => (
              <PokemonItem key={items.id} source={items} history={history} />
            ))
          ) : (
            <div />
          )}
        </div>
        <Pagination
          ref={node => (this.pagination = ReactDOM.findDOMNode(node))}
          showSizeChanger
          onShowSizeChange={onChange1}
          defaultCurrent={1}
          total={countPokemons}
          pageSizeOptions={[10, 20, 50]}
          onChange={onChange1}
        />
      </div>
    )
  }
}
