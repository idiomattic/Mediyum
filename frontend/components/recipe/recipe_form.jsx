import React from "react";
import { withRouter } from "react-router";
import UserNavContainer from "../user_nav/user_nav_container";

class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      author_id: this.props.currentUserId,
      photoFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleFile(e) {
    this.setState({
      photoFile: e.currentTarget.files[0]
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('recipe[title]', this.state.title)
    formData.append('recipe[body]', this.state.body)
    formData.append('recipe[author_id]', this.state.author_id)
    formData.append('recipe[photo]', this.state.photoFile)
    this.props.action(formData)
      .then(res => this.props.history.push(`/feed`))
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  render() {
    let {author} = this.props
    let fileLabel = this.state.photoFile ? this.state.photoFile.name : 'Choose File'
    return(
      <div className='recipe-form-div'>
        <div className='recipe-form-header'>
          <div className="recipe-form-header-left">
            <h2 className='logo'>Mediyum</h2>
            <p className="draft">Draft in {author.name}</p>
          </div>
          <div className="recipe-form-header-right">
            <label className="photo-label">{fileLabel}
              <input type="file" form='story-form' className="photo-input" onChange={e => this.handleFile(e)}/>
            </label>
            <input type="submit" form='story-form' className='publish-story' value='Publish' />
            <UserNavContainer/>
          </div>
        </div>
        <form className='recipe-form' onSubmit={this.handleSubmit} id='story-form'>
          <input className='recipe-title' 
            type="text" 
            value={this.state.title} 
            onChange={this.update('title')} 
            placeholder="Title" />
          <br />
          <textarea className='recipe-body' 
            type="text" 
            value={this.state.body} 
            onChange={this.update('body')} 
            placeholder="Share your recipe..."/>
        </form>
      </div>
    )
  }
}

export default withRouter(RecipeForm)