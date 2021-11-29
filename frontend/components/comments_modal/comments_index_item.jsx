import React from "react";
import { withRouter } from "react-router";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
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
    console.log('editing comment')
  }

  render() {
    return(
      <li className='comment-list-item'>
        <p className='comment-item-body'>{this.props.comment.body}</p>
        {this.isOwner()}
      </li>
    )
  }
}

export default withRouter(CommentsIndexItem)