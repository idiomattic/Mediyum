import React from "react";
import { Link } from "react-router-dom";

// function DropdownModal({modal, hideModal}) {
class DropdownModal extends React.Component {
  constructor(props) {
    super(props)
  }
  // if (!modal) {
  //   return null;
  // }

  handleSignout() {
    this.props.signOut()
    this.props.hideModal()
  }

  render() {
    let { modal, hideModal, signOut } = this.props
    return !modal ? null : (
      <ul className='dropdown-list'>
        <li className='write-story'>
          Write a story
        </li>
        <li className='sign-out'>
          <Link to='/' onClick={() => this.handleSignout()}>Sign Out</Link>
        </li>
      </ul>
    )
  }
}

export default DropdownModal