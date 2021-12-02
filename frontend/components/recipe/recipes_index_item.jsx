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
    this.props.history.push(`/recipes/${this.props.recipe.id}`)
  }

  redirectToShow() {
    let {recipe} = this.props
    console.log('in redirect', this.props)
    this.props.history.push(`/users/${recipe.author.id}`)
  }

  authorPhoto(author) {
    // const reader = new FileReader()
    // reader.onloadend = () => this.setState({imageUrl: reader.result, imageFile: file})
    // if (author.photo) {
    //   return reader.readAsDataURL(author.photo)
    // } else {
    //   return 'https://mediyum-dev.s3.us-west-1.amazonaws.com/placeholder_user_image.png'
    // }
    return author.photoUrl ? author.photoUrl : 'https://mediyum-dev.s3.us-west-1.amazonaws.com/placeholder_user_image.png'
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
            <img src={this.authorPhoto(author)} alt="img" />
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