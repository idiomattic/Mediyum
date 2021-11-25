import React from "react"
import SignUpFormContainer from '../session/signup_form_container'
import { Link } from "react-router-dom"

class UserNav extends React.Component {
  constructor(props) {
    super(props)
  }

  showDropdown() {
    
  }

  render() {
    return(
      <div className='user-nav'>
        {/* <Button className='user-dropdown'onClick={() => this.showDropdown()}></Button> */}
        <Link to='/' onClick={() => this.props.signOut()}>Sign Out</Link>
      </div>
    )
  }
}

export default UserNav