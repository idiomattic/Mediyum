import React from "react"
import { withRouter } from "react-router"

class RecipeShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yumCount: this.props.yumCount,
      yum: {
        yummer_id: props.currentUserId,
        recipe_id: props.recipeId
      }
    }
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.recipeId)
      .then(res => this.setYumCount(),
        err => this.props.history.push('/feed'))
  }
  
  editRecipe() {
    this.props.history.push(`/recipes/${this.props.recipeId}/edit`)
  }

  isOwner() {
    let { deleteRecipe, recipe, recipeId, currentUserId } = this.props
    return recipe.author_id === currentUserId ? (
      <div>
        <button className='black-button' onClick={() => this.editRecipe()}>
          Edit Recipe
        </button>
      </div>
      ) : null
  }

  redirectToShow(authorId) {
    this.props.history.push(`/users/${authorId}`)
  }

  showCommentsModal() {
    this.props.displayModal()
  }

  handleYum() {
    this.props.createYum(this.state.yum)
      .then(res => this.setState(
        { yumCount: this.props.yumCount}
      ))
  }

  setYumCount() {
    if (this.props.recipe) {
      this.setState({
        yumCount: this.props.yumCount
      })
    }
  }
  
  render() {
    let { recipe } = this.props
    if (!recipe || !recipe.author) {
      return null
    }
    return(
      <div className='recipe-show'>
        <div className='title-wrapper'>
          <h2 className='recipe-title'>{recipe.title}</h2>
          {this.isOwner()}
        </div>
        <br />
        <div className='recipe-info'>
          <img className='recipe-author-photo' src={recipe.author.photoUrl}/>
          <div className='author' onClick={() => this.redirectToShow(recipe.author_id)}>{recipe.author.name}</div>
        </div>
        <img src={recipe.photoUrl} alt={recipe.title} className='recipe-photo'/>
        <br />
        <p className='recipe-body'>{recipe.body}</p>
        <br />
        <div className='recipe-footer'>
          <div className='left-buttons'>
            <div className='yum-nav'>
              <img title='add yum' src='https://mediyum-dev.s3.us-west-1.amazonaws.com/yum.png' alt='Yum' className='yum-button' onClick={() => this.handleYum()}/>
              <div className='yum-count'>
                {this.state.yumCount}
              </div>
            </div>
            <div className='comment-nav'>
              <img src='https://mediyum-dev.s3.us-west-1.amazonaws.com/comment.png' alt='comments' className='comments-button' onClick={() => this.showCommentsModal()}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(RecipeShow)