import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class RecipesIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: "",
      imageFile: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.props.currentUserId) {
      this.props.history.push(`/recipes/${this.props.recipe.id}`)
    } else {
      this.props.displayModal('Sign In')
    }
  }

  redirectToShow() {
    let {recipe} = this.props
    this.props.history.push(`/users/${recipe.author.id}`)
  }

  authorPhoto(author) {
    'https://mediyum-dev.s3.us-west-1.amazonaws.com/placeholder_user_image.png'
    return author.photoUrl ? author.photoUrl : 'https://mediyum-dev.s3.us-west-1.amazonaws.com/placeholder_user_image.png'
  }

  recipePhoto(recipe) {
    return this.props.currentUserId ? <img src={recipe.photoUrl} alt={recipe.name} className='photo-preview'/> : null
  }
  

  render() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let {recipe} = this.props
    let {author} = this.props.recipe
    if (!recipe || !author) {
      return null
    }
    let createdAt = new Date(recipe.created_at)
    let publishDate = months[createdAt.getMonth()] + ' ' + createdAt.getDate()
    return(
      <li className='recipe-list-item'>
        <div className='recipe-info-wrapper'>
          <Link to={`/users/${author.id}`} className='author-link-wrapper'>
            <img className='author-photo' src={this.authorPhoto(author)} alt="img" />
            <div className='author-name'>{author.name}</div>
          </Link>
          <h3 onClick={() => this.handleClick()} className='recipe-item-title'>
            {this.props.recipe.title}
          </h3>
          <div className="publish-date">{publishDate}</div>
        </div>
        {this.recipePhoto(recipe)}
      </li>
    )
  }
}

export default withRouter(RecipesIndexItem)