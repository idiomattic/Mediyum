import React from "react"
import { withRouter } from "react-router"

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    let { user } = this.props
    if (!user) {
      return null
    }
    return(
      <div className='user-show'>
        <h2 className='user-title'>Name: {user.name}</h2>
        <br />
        
      </div>
    )
  }
}

export default withRouter(UserShow)