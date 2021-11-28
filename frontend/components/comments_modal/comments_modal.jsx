import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import CommentsIndexItem from "./comments_index_item";

class CommentsModal extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchComments()
  }

  render() {
    let { modal, hideModal, comments } = this.props
    return !modal ? null : (
      <div className='comments-modal'>
        <div className='comment-form-box'>
          <form>

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