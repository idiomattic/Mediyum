import React, {useState} from "react"
import UserNavContainer from "../user_nav/user_nav_container"
import { useLocation, useHistory, withRouter } from "react-router"

const UserShowHeader = props => {
  const {user, currentUser} = props
  if (!user) {return null}
  
  const follow = {
    follower_id: props.currentUserId,
    followed_user_id: props.userId
  }
  const [following, setFollowing] = useState(null)
  
  const followerCount = () => {
    let {followers} = props
    let followersCount = !followers ? 0 : Object.values(followers).length
    let unit = (followersCount === 1) ? 'Follower' : 'Followers'
    return(
      <div className='follower-count'>
        <p className='number-followers'>{followersCount}</p>
        <p className="unit">{unit}</p>
      </div>
    )
  }

  const isSelf = () => {
    let {userId, currentUserId} = props
    return userId === currentUserId ? null : displayFollowButton()
  }

  const displayFollowButton = () => {
    let {followers} = props
    let buttonText
    if (followers) {
      buttonText = following ? 'Following' : 'Follow'
    } else {
      buttonText = ''
    }
    return (
      <button className='green-button' id={buttonText} onClick={() => toggleFollow()}>{buttonText}</button>
    )
  }

  const toggleFollow = () => {
    let {followers, currentUserId, receivedFollows} = props
    let following = Boolean(followers[currentUserId])
    if (following) {
      let followToDelete = Object.values(receivedFollows).filter(follow => follow.follower_id === currentUserId)[0]
      props.deleteFollow(followToDelete)
        .then(setFollowing(false))
    } else {
      props.createFollow(follow)
        .then(setFollowing(true))
    }
  }

  let userPhoto = currentUser.photoUrl ? currentUser.photoUrl : 'https://mediyum-dev.s3.us-west-1.amazonaws.com/placeholder_user_image.png'
  
  return (
    <div className='user-show-header'>
      <h2 className='user-title'>{user.name}</h2>
      {followerCount()}
      {isSelf()}
      <div className='user-show-nav-spacer'></div>
      <div className='user-nav' onClick={() => props.displayModal()}>
        <img className='user-photo' src={userPhoto} alt="img" />
      </div>
      {/* <form className='user-photo-form' onSubmit={handleSubmit} id='user-photo-form'></form> */}
    </div>
  )
}

export default withRouter(UserShowHeader)