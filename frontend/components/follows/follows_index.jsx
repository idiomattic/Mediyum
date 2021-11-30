import React from "react"

class FollowsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchStories()
  }

  render() {
    return(
      <div className='stories-index'>
        <div className='index-nav'>

        </div>
        <ul className='stories-list'>
          
        </ul>
      </div>
    )
  }
}

export default FollowsIndex