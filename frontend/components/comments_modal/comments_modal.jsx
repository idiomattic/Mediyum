import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import CommentsIndexItem from "./comments_index_item";

class CommentsModal extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      body: '',
      story_id: this.props.story.id,
      commenter_id: this.props.currentUserId
    }
  }

  componentDidMount() {
    this.props.fetchComments()
  }

  handleSubmit() {
    e.preventDefault()
    this.props.createComment(this.state)
  }

  render() {
    let { modal, hideModal, comments } = this.props
    return !modal ? null : (
      <div className='comments-modal'>
        <div className='comment-form-box'>
          <form className='comment-form'>
            <textarea className='comment-form-body' placeholder='What are your thoughts?'></textarea>
            <br />
            <input type="submit" value="Save" />
          </form>
        </div>
        <ul className="comments-list">
          {
            comments.map((comment, i) => 
              <CommentsIndexItem key={i} comment={comment} />
            )
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(CommentsModal)