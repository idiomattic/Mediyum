import React from "react"
import { withRouter } from "react-router"

class UserHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      follow :{
        follower_id: this.props.currentUserId,
        followed_user_id: this.props.userId
      }
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  toggleFollow() {
    let {followers, currentUserId, receivedFollows} = this.props
    let following = Boolean(followers[currentUserId])
    if (following) {
      let followToDelete = Object.values(receivedFollows).filter(follow => follow.follower_id === currentUserId)[0]
      this.props.deleteFollow(followToDelete)
        .then(this.setState({
          following: false
        }))
    } else {
      this.props.createFollow(this.state.follow)
        .then(this.setState({
          following: true
        }))
    }
  }

  displayFollowButton() {
    let {followers, userId, currentUserId} = this.props
    let buttonText = followers[currentUserId] ? 'Following' : 'Follow'
    return (
      <button className='green-button' id={buttonText} onClick={() => this.toggleFollow()}>{buttonText}</button>
    )
  }

  followerCount() {
    let {followers} = this.props
    let followersCount = !followers ? 0 : Object.values(followers).length
    let unit = (followersCount === 1) ? 'Follower' : 'Followers'
    return(
      <div className='follower-count'>
        <p className='number-followers'>{followersCount}</p>
        <p className="unit">{unit}</p>
      </div>
    )
  }

  isSelf() {
    let {userId, currentUserId} = this.props
    return userId === currentUserId ? null : this.displayFollowButton()
  }

  render() {
    let { user, userId, currentUser } = this.props
    if (!user) {
      return null
    }
    return(
      <div className='user-show'>
        <div className='user-show-header'>
          <h2 className='user-title'>{user.name}</h2>
          {this.followerCount()}
          {this.isSelf()}
          <div className='user-show-nav-spacer'></div>
          <div className='user-nav' onClick={() => this.props.displayModal()}>
            <img className='user-photo' src={currentUser.photoUrl} alt="img" />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(UserHeader)