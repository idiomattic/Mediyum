import React from "react";
import { withRouter } from "react-router";

class UserRecipesIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let {history, recipe} = this.props
    history.push(`/users/${recipe.author_id}/recipes/${recipe.id}`)
  }

  truncatedBody() {
    let {recipe} = this.props
    let firstSentence = recipe.body.split(". ")[0] + '...'
    return(
      <p className='story-preview'>{firstSentence}</p>
    )
  }

  render() {
    let {recipe} = this.props
    return(
      <li className='user-recipe-list-item'>
        <h3 onClick={() => this.handleClick()} className='user-recipe-item-title'>{this.props.recipe.title}</h3>
        {this.truncatedBody()}
      </li>
    )
  }
}

export default withRouter(UserRecipesIndexItem)