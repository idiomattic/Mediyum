import React from "react"
import SignUpFormContainer from '../session/signup_form_container'
import { Link } from "react-router-dom"

class UserNav extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let {currentUserId, currentUser} = this.props
    if (!currentUserId) {
      return null
    }
    return(
      <div className='user-nav'>
        <img className='user-photo' src={currentUser.photoUrl} alt="img" />
        {/* <div className='user-dropdown'onClick={() => this.props.displayModal()}>User Dropdown</div> */}
      </div>
    )
  }
}

export default UserNav