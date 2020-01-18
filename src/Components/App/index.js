import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header'
import { Main } from '../Main/'
import PokemonInfoItem from '../PokemonInfoItem/'

export default () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:pokemonName" component={PokemonInfoItem} />
      </Switch>
    </>
  )
}
// history.push(/названия покемона)
// пропcы в самом компоненте будут
// this.props.history.... - тут  надо уточнить где имено
// history.push - на онклик, и передать имя покемона
// ponyal
// при рендере компонента. мы получаем пропса, кидаем запрос, и отображаем информацию
//potomu chto ya dumal ono po drugomu raboraer
// какого оно редиректит на этого говножуя
// не надо так думать плохо

//!pochemu ono ne renderit Main?
// оно сразу кидает на говножуя
// я не могу убрать надпись после слэша
