import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      body: '',
      story_id: this.props.story.id,
      commenter_id: this.props.currentUserId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createComment(this.state)
      .then(this.setState(this.state))
  }

  updateBody() {
    return e => this.setState({
      body: e.target.value
    })
  }

  render() {
    let { modal } = this.props
    return !modal ? null : (
      <div className='comment-form-box'>
        <form className='comment-form' onSubmit={this.handleSubmit}>
          <textarea className='comment-form-body'
            placeholder='What are your thoughts?' 
            value={this.state.body}
            onChange={this.updateBody()}/>
          <br />
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
  
}

export default CommentForm