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

  mapCommentsToList() {

  }

  render() {
    let { modal, hideModal, signOut } = this.props
    return !modal ? null : (
      <div className='comments-modal'>
        <div className='comment-form-box'>
          <form>

          </form>
        </div>
        <ul className="comments-list">
          {
            
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(CommentsModal)