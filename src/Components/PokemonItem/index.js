import React, { useEffect, useState } from 'react'
import './PokemonItem.scss'
import { Spin } from 'antd'
import Img from 'react-image'

export default props => {
  const { source } = props
  const [imageLoading, setImageLoading] = useState(true)

  const imageLoaded = () => {
    setImageLoading(false)
  }

  useEffect(() => {}, [])
  return (
    <div
      className="pokemonItem"
      id={source.name}
      onClick={() => props.history.push(source.name)}
    >
      <Spin style={{ display: imageLoading ? 'inline-block' : 'none' }} />
      <Img
        style={{ display: imageLoading ? 'none' : 'flex' }}
        onLoad={imageLoaded}
        src={[
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${source.id}.png`,
          'http://cdn.onlinewebfonts.com/svg/img_384.png',
        ]}
      />
      <h3>{source.name}</h3>
    </div>
  )
}
