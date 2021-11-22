import React from "react"
import UserNavContainer from "../user_nav/user_nav_container"
import GuestNavContainer from "../guest_nav/guest_nav_container"

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUserId} = this.props
    const barDisplay = currentUserId ? <UserNavContainer /> : <GuestNavContainer />
    return(
      <div className='header-navbar'>
        {barDisplay}
      </div>
    )
  }
}

export default Header