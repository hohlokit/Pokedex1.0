import React from 'react'
import './PokemonInfoItem.scss'
import { Progress } from 'antd'

export default props => {
  const { stats1 } = props
  const stats = {
    name: 'Pikachu',
    speed: 100,
    specDef: 100,
    specAt: 100,
    def: 100,
    atk: 100,
    hp: 100,
  }
  return (
    <div className="pokemonInfoItem">
      <h2>{stats.name}</h2>
      <div className="row">
        <div className="pokemon Image">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png`}
          />
        </div>
        <div className="pokemon Stats">
          <div>
            <div>Speed</div>
            <Progress percent={stats.speed} showInfo={false} />
          </div>
          <div>
            <div>Special defense</div>
            <Progress percent={stats.specDef} showInfo={false} />
          </div>
          <div>
            <div>Special attack</div>
            <Progress percent={stats.specAt} showInfo={false} />
          </div>
          <div>
            <div>Defense</div>
            <Progress percent={stats.def} showInfo={false} />
          </div>
          <div>
            <div>Attack</div>
            <Progress percent={stats.atk} showInfo={false} />
          </div>
          <div>
            <div>Hitpoints</div>
            <Progress percent={stats.hp} showInfo={false} />
          </div>
        </div>
      </div>
    </div>
  )
}
