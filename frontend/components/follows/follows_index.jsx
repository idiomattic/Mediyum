import React from "react"

class FollowsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFollows()
  }

  // filterFollows() {
  //   let { follows } = this.props
  //   return follows.filter(follow => follow.followed_user_id === this.state.user_id)
  // }

  render() {
    return(
      <div className='follows-index'>
        <div className='index-nav'>

        </div>

      </div>
    )
  }
}

export default FollowsIndex