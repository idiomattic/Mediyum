import React from "react";
import { Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

// function DropdownModal({modal, hideModal}) {
class DropdownModal extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSignout() {
    this.props.signOut()
    this.props.hideModal()
  }

  redirectToStoryForm() {
    this.props.history.push('/stories/new')
    debugger
  }

  render() {
    let { modal, hideModal, signOut } = this.props
    return !modal ? null : (
      <ul className='dropdown-list'>
        <li className='write-story'>
          <Link to='/stories/new' onClick={() => this.redirectToStoryForm()}>Write a story</Link>
          {/* <Redirect to='/' onClick={() => this.redirectToStoryForm()}>Write a story</Redirect> */}
        </li>
        <li className='sign-out'>
          <Link to='/' onClick={() => this.handleSignout()}>Sign Out</Link>
        </li>
      </ul>
    )
  }
}

export default withRouter(DropdownModal)