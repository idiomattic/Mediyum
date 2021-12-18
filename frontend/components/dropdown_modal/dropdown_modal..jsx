import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class DropdownModal extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSignout() {
    this.props.signOut()
    this.props.hideModal()
  }

  redirectToRecipeForm() {
    this.props.hideModal()
    this.props.history.push('/recipes/new')
  }

  redirectToFeed() {
    this.props.hideModal()
    this.props.history.push('/feed')
  }

  redirectToShow() {
    this.props.hideModal()
    this.props.history.push(`/users/${this.props.currentUserId}`)
  }

  render() {
    let { modal, currentUserId, currentUser } = this.props
    let userPhoto = currentUser.photoUrl ? currentUser.photoUrl : 'https://mediyum-dev.s3.us-west-1.amazonaws.com/placeholder_user_image.png'
    return !modal ? null : (
      <ul className='dropdown-list'>
        <li className='user-show-button' onClick={() => this.redirectToShow()} >
          <img className='user-photo' src={userPhoto} alt="img" />
          <Link className='user-name-link' to={`/users/${currentUserId}`} >{currentUser.name}</Link>
        </li>
        <li className='write-recipe'>
          <Link to='/recipes/new' onClick={() => this.redirectToRecipeForm()}>Write a recipe</Link>
        </li>
        <li className='recipes-link'>
          <Link to='/feed' onClick={() => this.redirectToFeed()}>Recipes</Link>
        </li>
        <li className='sign-out'>
          <Link to='/' onClick={() => this.handleSignout()}>Sign Out</Link>
        </li>
      </ul>
    )
  }
}

export default withRouter(DropdownModal)