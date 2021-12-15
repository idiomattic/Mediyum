import React from "react"
import UserNavContainer from "../user_nav/user_nav_container"
import GuestNavContainer from "../guest_nav/guest_nav_container"

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props.history)
    const {currentUserId} = this.props
    // const barDisplay = currentUserId ? <UserNavContainer /> : <GuestNavContainer history={this.props.history}/>
    let barDisplay
    let headerClass
    if (currentUserId) {
      barDisplay = <UserNavContainer />
      headerClass = 'user-header'
    } else {
      barDisplay = <GuestNavContainer history={this.props.history}/>
      headerClass = 'guest-header'
    }
    return(
      <header className={headerClass}>
        <h2 className='logo'>Mediyum</h2>
        <div className='header-navbar'>
          {barDisplay}
        </div>
      </header>
    )
  }
}

export default Header

/*
const UserNav = props => {
  const location = useLocation()
  let className = 'user-nav'
  if (location !== '/feed') {
    className = 'user-nav recipe-show'
  }
  let {currentUserId, currentUser, displayModal} = props
  if (!currentUserId) {
    return null
  }
  return (
    <div className={className} onClick={() => displayModal()}>
      <img className='user-photo' src={currentUser.photoUrl} alt="img" />
    </div>
  )
}
*/ 