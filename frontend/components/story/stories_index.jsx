import React from "react"
import { Link } from "react-router-dom"
import StoriesIndexItem from "./stories_index_item"

class StoriesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='stories-index'>
        <StoriesIndexItem />
      </div>
    )
  }
}

export default StoriesIndex