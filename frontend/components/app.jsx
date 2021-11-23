import React from 'react'
import { Route, Redirect, Routes, Link, HashRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import HeaderContainer from './header/header_container'
import HomeContainer from './home/home_container'
import Modal from './modal/modal_container'

const App = () => (
  <div id='app'>
    <header className='app-header'>
      <h2 className='logo'>Mediyum</h2>
      <Route path='/' component={HeaderContainer}/>
    </header>
    <div className='app-body'>
      <ProtectedRoute exact path='/feed' component={HomeContainer}/>
    </div>
    <Modal />
  </div>
)

export default App