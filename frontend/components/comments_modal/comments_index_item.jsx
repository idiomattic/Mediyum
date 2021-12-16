import React from "react";
import { withRouter } from "react-router";
import CommentFormContainer from "./comment_form_container";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      yumCount: props.yumCount,
      yum: {
        yummer_id: props.currentUserId,
        comment_id: props.comment.id
      }
    }
    this.toggleEditing = this.toggleEditing.bind(this)
  }

  isOwner() {
    let { comment, currentUserId, updateComment, deleteComment } = this.props
    return comment.commenter_id === currentUserId ? 
      <div className='comment-buttons'>
        <div className='comment-edit-button' onClick={() => this.toggleEditing()}>
          Edit
        </div>
        <div className='comment-delete-button' onClick={() => deleteComment(comment.id)}>
          Delete
        </div>
      </div>
    : <div className='comment-yum-nav'>
        <img title='add yum' src='https://mediyum-dev.s3.us-west-1.amazonaws.com/yum.png' alt='Yum' className='yum-button' onClick={() => this.handleYum()}/>
        <div className='comment-yum-count'>
          {this.state.yumCount}
        </div>
      </div>
  }

  handleYum() {
    this.props.createYum(this.state.yum)
      .then(res => this.setState(
        { yumCount: this.props.yumCount}
      ))
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