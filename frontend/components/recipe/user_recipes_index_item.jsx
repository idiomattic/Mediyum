import React from "react";
import { withRouter } from "react-router";

class UserRecipesIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push(`/recipes/${this.props.recipe.id}`)
  }

  render() {
    let {recipe} = this.props
    return(
      <li className='recipe-list-item'>
        <h3 onClick={() => this.handleClick()} className='user-recipe-item-title'>{this.props.recipe.title}</h3>
      </li>
    )
  }
}

export default withRouter(UserRecipesIndexItem)