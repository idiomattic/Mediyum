import React from "react"
import StoriesIndex from "../story/stories_index"
import StoriesIndexContainer from "../story/stories_index_container"

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUserId} = this.props
    return(
      <div className='home-page'>
        <StoriesIndexContainer />
      </div>
    )
  }
}

export default Home