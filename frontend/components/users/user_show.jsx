import React from "react"
import { withRouter } from "react-router"
import UserStoriesIndexItem from "../story/user_story_index_item"


class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      follower_id: this.props.currentUserId,
      followee_id: this.props.userId
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  myStories() {
    const stories = this.props.user.stories
    return(
      <ul className='users-stories-list'>
        {
          stories.map((story, i) => 
            <UserStoriesIndexItem key={i} story={story} className='users-stories-list-item'/>
          )
        }
      </ul>
    )
  }

  displayToggleFollow() {
    console.log('trying to toggle follow on this user', this.state)
    
    return (
      <button className='green-button' onClick={() => this.displayToggleFollow()}>Follow</button>
    )
  }

  isSelf() {
    let {userId, currentUserId} = this.props
    return userId === currentUserId ? null : this.displayToggleFollow()
  }

  render() {
    console.log(this.props)
    let { user, userId } = this.props
    if (!user) {
      return null
    }
    return(
      <div className='user-show'>
        <div className='user-show-header'>
          <h2 className='user-title'>{user.name}</h2>
          {this.isSelf()}
        </div>
        <br />
        {this.myStories()}
      </div>
    )
  }
}

export default withRouter(UserShow)