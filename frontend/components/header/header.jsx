import React from "react"
import UserNavContainer from "../user_nav/user_nav_container"
import GuestNavContainer from "../guest_nav/guest_nav_container"
import { useLocation } from "react-router"

const Header = props => {
  const location = useLocation()
  let className = ''
  if (location.pathname !== '/feed') {
    className = ' recipe-show'
  }
  let {currentUserId, currentUser, displayModal} = props
  let barDisplay
  let headerClass
  if (!currentUserId) {
    barDisplay = <GuestNavContainer history={props.history}/>
    headerClass = 'guest-header'
  } else {
    barDisplay = <UserNavContainer />
    headerClass = 'user-header' + className
  }
  return (
    <header className={headerClass}>
      <h2 className='logo'>Mediyum</h2>
      <div className='header-navbar'>
        {barDisplay}
      </div>
    </header>
  )
}

export default Header
