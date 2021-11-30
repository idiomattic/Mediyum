import React from "react"
import { withRouter } from "react-router"
import StoriesIndexItem from '../story/stories_index_item'


class UserShow extends React.Component {
  constructor(props) {
    super(props)
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
            <StoriesIndexItem key={i} story={story} className='users-stories-list-item'/>
          )
        }
      </ul>
    )
  }

  render() {
    let { user } = this.props
    if (!user) {
      return null
    }
    return(
      <div className='user-show'>
        <h2 className='user-title'>{user.name}</h2>
        <br />
        {this.myStories()}
      </div>
    )
  }
}

export default withRouter(UserShow)