import React from "react";
import { withRouter } from "react-router";
import CommentFormContainer from "./comment_form_container";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  isOwner() {
    let { comment, currentUserId, updateComment, deleteComment } = this.props
    return comment.commenter_id === currentUserId ? 
      <div className='comment-buttons'>
        <button className='comment-edit-button' onClick={() => this.editComment()}>
          Edit
        </button>
        <button className='comment-delete-button' onClick={() => deleteComment(comment.id)}>
          Delete
        </button>
      </div>
    : null
  }

  editComment() {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    return this.state.editing ? (
      <li className='edit-comment-list-item'>
        <CommentFormContainer comment={this.props.comment} />
      </li>
    ) : (
      <li className='comment-list-item'>
        <p className='comment-item-body'>{this.props.comment.body}</p>
        {this.isOwner()}
      </li>
    )
  }
}

export default withRouter(CommentsIndexItem)