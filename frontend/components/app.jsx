import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import HeaderContainer from './header/header_container'
import HomeContainer from './home/home_container'
import Modal from './modal/modal_container'
import RecipeFormContainer from './recipe/create_recipe_form_container'
import UpdateRecipeFormContainer from './recipe/update_recipe_form_container'
import RecipeShowContainer from './recipe/recipe_show_container'
import UserShowContainer from './users/user_show_container'
import GuestRecipesIndexContainer from './recipe/guest_recipe_index_container'
import UserShowHeaderContainer from './header/user_show_header_container'

const App = () => {
  return(
  <div id='app'>
    <Switch>
      <AuthRoute exact path='/' component={HeaderContainer}/>
      <Route path='/feed' component={HeaderContainer}/>
      <Route exact path='/recipes/new' component={null}/>
      <Route exact path='/recipes/:recipeId' component={UserShowHeaderContainer}/>
      <Route exact path='/users/:userId' component={UserShowHeaderContainer}/>
    </Switch>
    <AuthRoute exact path='/' component={HomeContainer}/>
    <div className='app-body'>
      <Switch>
        <AuthRoute exact path='/' component={GuestRecipesIndexContainer}/>
        <ProtectedRoute exact path='/feed' component={HomeContainer}/>
        <ProtectedRoute exact path='/recipes/new' component={RecipeFormContainer}/>
        <ProtectedRoute exact path='/recipes/:recipeId' component={RecipeShowContainer}/>
        <ProtectedRoute exact path='/recipes/:recipeId/edit' component={UpdateRecipeFormContainer}/>
        <ProtectedRoute exact path='/users/:userId' component={UserShowContainer}/>
      </Switch>
    </div>
    <footer className='app-footer'>
      <h3 className='footer-message'>More from Matthew Lese</h3>
      <div className='footer-spacer'></div>
      <a href="https://github.com/matthewlese" className='github-link'>
        <div className='github'>GitHub</div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className='github-link'/>
      </a>
      <a href="https://www.linkedin.com/in/matthewlese/" className='linkedin-link'>
        <div className='linkedin'>LinkedIn</div>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className='linkedin-link'/>
      </a>
    </footer>
    <Modal />
  </div>
  )
}

export default App