import React from "react";

class UpdateStoryForm extends React.Component {
  constructor(props) {
    super(props)
    let { currentStoryId, preloadedInfo } = this.props
    this.state = {
      title: preloadedInfo.title,
      body: preloadedInfo.body
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state)
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  render() {
    return(
      <div className='story-form-div'>
        <form className='story-form' onSubmit={this.handleSubmit}>
            <label>Title
              <br />
              <input className='story-title' 
                type="text" 
                value={this.state.title} 
                onChange={this.update('title')} />
            </label>
            <br />
            <label>Body
              <br />
              <textarea className='story-body' 
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

export default UpdateStoryForm