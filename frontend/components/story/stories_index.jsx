import React from "react"
import StoriesIndexItem from "./stories_index_item"

class StoriesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchStories()
  }

  render() {
    const { stories } = this.props
    return(
      <div className='stories-index'>
        <div className='index-nav'>
          <h2 className='following-stories'>FOLLOWING</h2>
          <h2 className='recommended-stories'>RECOMMENDED FOR YOU</h2>
          <h2 className='right-padding'></h2>
        </div>
        <ul className='stories-list'>
          {
            stories.map((story, i) => 
              <StoriesIndexItem key={i} story={story} />
            )
          }
        </ul>
      </div>
    )
  }
}

export default StoriesIndex