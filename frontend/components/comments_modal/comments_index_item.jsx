import React from "react";
import { withRouter } from "react-router";
import CommentFormContainer from "./comment_form_container";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
    this.toggleEditing = this.toggleEditing.bind(this)
  }

  isOwner() {
    let { comment, currentUserId, updateComment, deleteComment } = this.props
    return comment.commenter_id === currentUserId ? 
      <div className='comment-buttons'>
        <button className='comment-edit-button' onClick={() => this.toggleEditing()}>
          Edit
        </button>
        <button className='comment-delete-button' onClick={() => deleteComment(comment.id)}>
          Delete
        </button>
      </div>
    : <div className="comment-clap-nav">
      <div>Yum</div>
    </div>
  }

  toggleEditing() {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    let {comment} = this.props
    if (!comment || !comment.commenter) {
      return null
    }
    return this.state.editing ? (
      <li className='edit-comment-list-item'>
        <CommentFormContainer comment={comment} toggleEditing={this.toggleEditing}/>
      </li>
    ) : (
      <li className='comment-list-item'>
        <div className='comment-info'>
          <img className='commenter-photo' src={comment.commenter.photoUrl} alt={comment.commenter.name} />
          <p className='commenter-name'>{comment.commenter.name}</p>
        </div>
        <p className='comment-item-body'>{comment.body}</p>
        {this.isOwner()}
      </li>
    )
  }
}

export default withRouter(CommentsIndexItem)