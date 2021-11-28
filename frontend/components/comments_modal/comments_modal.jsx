import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class CommentsModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { modal, hideModal, signOut } = this.props
    return !modal ? null : (
      <div className='comments-modal'>
        <div className='comment-form-box'>
          <form>

          </form>
        </div>
        <li>
          <Link to='/feed' onClick={() => this.redirectToFeed()}>Stories</Link>
        </li>
        <li className='sign-out'>
          <Link to='/' onClick={() => this.handleSignout()}>Sign Out</Link>
        </li>
      </div>
    )
  }
}

export default withRouter(CommentsModal)