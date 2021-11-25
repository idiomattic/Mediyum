import React from "react";

const StoriesIndexItem = props => {
  
  return(
    <li className='story-list-item'>
      <h3 className='story-item-title'>{props.story.title}</h3>
    </li>
  )
}

export default StoriesIndexItem