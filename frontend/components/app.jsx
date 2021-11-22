import React from 'react'
import { Route, Redirect, Routes, Link, HashRouter } from 'react-router-dom'
import SignInFormContainer from './session/signin_form_container'
import SignUpFormContainer from './session/signup_form_container'
import HeaderContainer from './header/header_container'
import Modal from './modal/modal_container'

const App = () => (
  <div id='app'>
    <header className='app-header'>
      <h2>Medium</h2>
      <Modal />
      <Routes>
        <Route exact path='/' element={<HeaderContainer />}/>

      </Routes>
    </header>
  </div>
)

export default App