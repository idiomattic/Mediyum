import React from 'react'
import { Route, Redirect, Routes, Link, HashRouter } from 'react-router-dom'
import SignInFormContainer from './session/signin_form_container'
import SignUpFormContainer from './session/signup_form_container'
import HeaderContainer from './header/header_container'

const App = () => (
  <div id='app'>
    <h2>Medium</h2>
    <Routes>
      {/* <Route exact path='/' element={<SignUpFormContainer />}/> */}
      <Route exact path='/' element={<HeaderContainer />}/>

      <Route exact path='/signin' element={<SignInFormContainer />}/>

    </Routes>
  </div>
)

export default App