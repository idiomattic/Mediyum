import React from "react";
import { withRouter } from "react-router";
import CommentsIndexItem from "./comments_index_item";
import CommentFormContainer from "./comment_form_container";

class CommentsModal extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      body: '',
      story_id: this.props.story.id,
      commenter_id: this.props.currentUserId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchComments()
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

  filterComments() {
    let { comments } = this.props
    return comments.select(comment => comment.story_id === this.state.story_id)
  }

  render() {
    let { modal, hideModal, comments, updateComment, deleteComment } = this.props
    const storyComments = this.filterComments()
    return !modal ? null : (
      <div className='comments-modal'>
        {<CommentFormContainer />}
        <ul className="comments-list">
          {
            comments.map((comment, i) => 
              <CommentsIndexItem key={i} 
                comment={comment} 
                currentUserId={this.props.currentUserId}
                updateComment={updateComment}
                deleteComment={deleteComment}/>
            )
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(CommentsModal)