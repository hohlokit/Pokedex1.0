import React, { useEffect, useState } from 'react'
import './PokemonInfoItem.scss'
import axios from 'axios'
import { Spin, Progress } from 'antd'
import Img from 'react-image'

export default props => {
  const [pokemonsInfo, setPokemonsInfo] = useState(null)

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${props.match.params.pokemonName}`,
      )
      .then(val => {
        const { stats, types, name, sprites } = val.data
        setPokemonsInfo({ stats, types, name, sprites })
      })
  }, [])

  return pokemonsInfo === null ? (
    <div className="Loader">
      <Spin size="large" />
    </div>
  ) : (
    <div className="pokemonInfoItem">
      <h2>{pokemonsInfo.name}</h2>
      <div className="row">
        <div className="pokemon Image">
          <Img
            src={[
              pokemonsInfo.sprites.front_default,
              ' http://cdn.onlinewebfonts.com/svg/img_384.png',
            ]}
          />
        </div>
        <div className="pokemon Stats">
          {pokemonsInfo.stats.map(item => (
            <div>
              <div>{item.stat.name}</div>
              <Progress percent={item.base_stat} showInfo={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
