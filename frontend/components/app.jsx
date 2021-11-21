import React from 'react'
import { Route, Redirect, Routes, Link, HashRouter } from 'react-router-dom'
import SignInFormContainer from './session/signin_form_container'
import SignUpFormContainer from './session/signup_form_container'

const App = () => (
  <div id='app'>
    <Routes>
      <Route exact path='/' element={<SignUpFormContainer />}/>
      <Route exact path='/signin' element={<SignInFormContainer />}/>

    </Routes>
  </div>
)

export default App