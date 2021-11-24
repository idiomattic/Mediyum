import React from "react";

const StoriesIndexItem = props => {
  return(
    <li key={props.key}>
      <h3 className='story-item-title'>{props.story.title}</h3>
    </li>
  )
}

export default StoriesIndexItem