import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class RecipesIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push(`/recipes/${this.props.recipe.id}`)
  }

  redirectToShow() {
    let {recipe} = this.props
    console.log('in redirect', this.props)
    this.props.history.push(`/users/${recipe.author.id}`)
  }

  getDate() {
    
  }

  render() {
    let {recipe} = this.props
    let {author} = this.props.recipe
    if (!recipe || !author) {
      return null
    }
    return(
      <li className='recipe-list-item'>
        <div className='recipe-info-wrapper'>
          <div className='author-link-wrapper'>
            <Link to={`/users/${author.id}`} >{author.name}</Link>
          </div>
          <h3 onClick={() => this.handleClick()} className='recipe-item-title'>
            {this.props.recipe.title}
          </h3>
        </div>
      </li>
    )
  }
}

export default withRouter(RecipesIndexItem)