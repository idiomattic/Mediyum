import React from "react"

const UserNav = props => {
  let {currentUserId, currentUser, displayModal} = props
  let userPhoto = currentUser.photoUrl ? currentUser.photoUrl : 'https://mediyum-dev.s3.us-west-1.amazonaws.com/placeholder_user_image.png'
  if (!currentUserId) {
    return null
  }
  return(
    <div className='user-nav' onClick={() => displayModal()}>
      <img className='user-photo' src={userPhoto} alt="img" />
    </div>
  )
}

export default UserNav