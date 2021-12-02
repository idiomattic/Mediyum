import React from 'react'
import { Switch, Route, Redirect, Routes, Link, HashRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import HeaderContainer from './header/header_container'
import HomeContainer from './home/home_container'
import Modal from './modal/modal_container'
import RecipeFormContainer from './recipe/create_recipe_form_container'
import UpdateRecipeFormContainer from './recipe/update_recipe_form_container'
import RecipeShowContainer from './recipe/recipe_show_container'
import UserShowContainer from './users/user_show_container'

const App = () => {
  return(
  <div id='app'>
    {/* <header className='app-header'> */}
      <Switch>
        <AuthRoute exact path='/' component={HeaderContainer}/>
        <Route path='/feed' component={HeaderContainer}/>
        <Route path='/recipes' component={HeaderContainer}/>
        <Route path='/users' component={HeaderContainer}/>
      </Switch>
    {/* </header> */}
    <div className='app-body'>
      <Switch>
        <ProtectedRoute exact path='/feed' component={HomeContainer}/>
        <ProtectedRoute exact path='/recipes/new' component={RecipeFormContainer}/>
        <ProtectedRoute exact path='/recipes/:recipeId' component={RecipeShowContainer}/>
        <ProtectedRoute exact path='/recipes/:recipeId/edit' component={UpdateRecipeFormContainer}/>
        <ProtectedRoute exact path='/users/:userId' component={UserShowContainer}/>
      </Switch>
    </div>
    <Modal />
  </div>
  )
}

export default App