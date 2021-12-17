import React from "react";
import { withRouter } from "react-router";

class UpdateRecipeForm extends React.Component {
  constructor(props) {
    super(props)
    let { preloadedInfo } = this.props
    this.state = preloadedInfo
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changed = false
  }

  redirectToShow() {
    this.props.history.push(`/recipes/${this.state.id}`)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.changed ? 
      this.props.action(this.state)
        .then(res => this.redirectToShow())
      : this.redirectToShow()
  }

  update(field) {
    this.changed = true
    return e => this.setState({
      [field]: e.target.value
    })
  }

  handleDelete() {
    let {deleteRecipe, currentRecipeId, history} = this.props
    deleteRecipe(currentRecipeId)
      .then(res => history.push('/feed'))
  }

  render() {
    return(
      <div className='recipe-form-div'>
        <div className='recipe-form-header'>
          <div className="recipe-form-header-left">
            <h2 className='logo'>Mediyum</h2>
            {/* <p className="draft">Draft in {author.name}</p> */}
          </div>
          <div className="recipe-form-header-right">
            <input type="submit" form='story-form' className='publish-story' value='Update' />
            {/* <UserNavContainer/> */}
          </div>
        </div>
        <form className='recipe-form' onSubmit={this.handleSubmit} id='story-form'>
            <input className='recipe-title' 
              type="text" 
              value={this.state.title} 
              onChange={this.update('title')} />
            <br />
            <textarea className='recipe-body' 
              type="text" 
              value={this.state.body} 
              onChange={this.update('body')} />
            <br />
            {/* <input className='black-button' 
              type="submit" 
              value={this.props.formType} /> */}
            <br />
            <button className='black-button' onClick={() => this.handleDelete()}>
              Delete Recipe
            </button> 
        </form>
      </div>
    )
  }
}

export default withRouter(UpdateRecipeForm)