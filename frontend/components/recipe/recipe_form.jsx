import React from "react";
import { withRouter } from "react-router";

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
    return(
      <div className='recipe-form-div'>
        <form className='recipe-form' onSubmit={this.handleSubmit}>
            <label>Title
              <br />
              <input className='recipe-title' 
                type="text" 
                value={this.state.title} 
                onChange={this.update('title')} />
            </label>
            <br />
            <label>Body
              <br />
              <textarea className='recipe-body' 
                type="text" 
                value={this.state.body} 
                onChange={this.update('body')} />
            </label>
            <br />
            <input type="file" onChange={e => this.handleFile(e)}/>
            <br />
            <input className='black-button' 
              type="submit" 
              value={this.props.formType} />
            <br />
        </form>
      </div>
    )
  }
}

export default withRouter(RecipeForm)