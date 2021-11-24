import React from "react";

class StoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      author_id: this.props.currentUserId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log(this.props)
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

export default StoryForm