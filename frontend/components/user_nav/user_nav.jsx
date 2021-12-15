import React from "react"

const UserNav = props => {
  let {currentUserId, currentUser, displayModal} = props
  if (!currentUserId) {
    return null
  }
  return(
    <div className='user-nav' onClick={() => displayModal()}>
      <img className='user-photo' src={currentUser.photoUrl} alt="img" />
    </div>
  )
}

export default UserNav