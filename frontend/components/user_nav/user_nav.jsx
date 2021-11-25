import React from "react"
import SignUpFormContainer from '../session/signup_form_container'
import { Link } from "react-router-dom"

class UserNav extends React.Component {
  constructor(props) {
    super(props)
  }

  // showDropdown() {
    
  // }

  render() {
    return(
      <div className='user-nav'>
        <button className='user-dropdown'onClick={() => this.props.displayModal()}>Dropdown</button>
        <Link to='/' onClick={() => this.props.signOut()}>Sign Out</Link>
      </div>
    )
  }
}

export default UserNav