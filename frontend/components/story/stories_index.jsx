import React from "react"
import { Link } from "react-router-dom"
import StoriesIndexItem from "./stories_index_item"

class StoriesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { stories } = this.props
    return(
      <div className='stories-index'>
        <h2 className='recommended-stories'>RECOMMENDED FOR YOU</h2>
        <ul className='stories-list'>
          {
            stories.map((story, i) => <StoriesIndexItem story={story} key={i} />)
          }
        </ul>
      </div>
    )
  }
}

export default StoriesIndex