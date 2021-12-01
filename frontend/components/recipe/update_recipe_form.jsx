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
            <input className='black-button' 
              type="submit" 
              value={this.props.formType} />
            <br />
        </form>
      </div>
    )
  }
}

export default withRouter(UpdateRecipeForm)