import React from "react"
import SignUpFormContainer from '../session/signup_form_container'
import { Link } from "react-router-dom"

class UserNav extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className='user-nav'>
        <div className='user-dropdown'onClick={() => this.props.displayModal()}>Dropdown</div>
      </div>
    )
  }
}

export default UserNav