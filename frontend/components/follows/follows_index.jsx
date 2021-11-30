import React from "react"

class FollowsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFollows()
  }

  render() {
    return(
      <div className='follows-index'>
        <div className='index-nav'>

        </div>
        <ul className='stories-list'>
          
        </ul>
      </div>
    )
  }
}

export default FollowsIndex