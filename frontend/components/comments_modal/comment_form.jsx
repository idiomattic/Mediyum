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
    let { comment, toggleEditing, updateComment, createComment, rerenderModal } = this.props
    comment ? (
      updateComment(this.state)
        .then(comment => toggleEditing())
        .then(this.resetState())
    ) : (
      createComment(this.state)
        .then(comment => rerenderModal())
        .then(this.resetState())
    )
  }

  updateBody() {
    return e => this.setState({
      body: e.target.value
    })
  }

  handleErrors() {
    return(
      <ul className='comment error-list'>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    )
  }

  showErrorsHere() {
    const showErrorsHere = false
  }

  render() {
    let { modal } = this.props
    return !modal ? null : (
      <div className='comment-form-box'>
        {this.handleErrors()}
        <form className='comment-form' onSubmit={this.handleSubmit}>
          <textarea className='comment-form-body'
            placeholder='What are your thoughts?' 
            value={this.state.body}
            onChange={this.updateBody()}/>
          <br />
          <input type="submit" value="Comment" className='comment green-button'/>
        </form>
      </div>
    )
  }
  
}

export default CommentForm