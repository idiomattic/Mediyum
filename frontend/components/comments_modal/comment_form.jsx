import React from "react";

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.comment || {
        body: '',
        recipe_id: this.props.recipe.id,
        commenter_id: this.props.currentUserId
      }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  resetState() {
    this.setState({
      body: '',
      recipe_id: this.props.recipe.id,
      commenter_id: this.props.currentUserId
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let { comment, toggleEditing, updateComment, createComment } = this.props
    comment ? (
      updateComment(this.state)
        .then(comment => toggleEditing())
        .then(this.resetState())
      ) : (
        createComment(this.state)
          .then(this.resetState())
      )
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