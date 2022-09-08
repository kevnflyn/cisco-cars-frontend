import React from 'react'
import ReactDom from 'react-dom'
import { HomePage } from './pages/home/HomePage'

import './App.less'

const App = () => <HomePage/>

const renderApp = () => {
  ReactDom.render(
    <App/>,
    document.getElementById('root')
  )
}

// if (module.hot) {
//   module.hot.accept(['./Routing'], renderApp)
// }

renderApp()
