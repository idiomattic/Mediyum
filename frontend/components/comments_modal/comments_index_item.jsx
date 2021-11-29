import React from "react";
import { withRouter } from "react-router";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  canEdit() {
    console.log(this.props.comment.commenter_id)
    console.log(this.props)
    return this.props.comment.commenter_id === this.props.currentUserId ? 
      <button className='comment-edit-button' onClick={() => this.editComment()}>
        Edit
      </button> 
      : null
  }

  editComment() {
    console.log('editing comment')
  }

  render() {
    return(
      <li className='comment-list-item'>
        <p className='comment-item-body'>{this.props.comment.body}</p>
        {this.canEdit()}
      </li>
    )
  }
}

export default withRouter(CommentsIndexItem)