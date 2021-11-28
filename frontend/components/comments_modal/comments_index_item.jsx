import React from "react";
import { withRouter } from "react-router";

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li className='comment-list-item'>
        <p className='comment-item-body'>{this.props.comment.body}</p>
      </li>
    )
  }
}

export default withRouter(CommentsIndexItem)