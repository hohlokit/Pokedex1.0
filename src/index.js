import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './Reducers/index'
import { Main } from './Components/Main/'
import PokemonInfoItem from './Components/PokemonInfoItem/PokemonInfoItem'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Components/Header/Header'

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/main" component={Main} />
      <Route path="/pokemon" component={PokemonInfoItem} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
