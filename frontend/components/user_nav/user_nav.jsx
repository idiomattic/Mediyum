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
      <div className='user-nav' onClick={() => this.props.displayModal()}>
        <img className='user-photo' src={currentUser.photoUrl} alt="img" />
      </div>
    )
  }
}

export default UserNav