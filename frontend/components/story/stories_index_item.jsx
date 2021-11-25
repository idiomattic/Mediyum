import React from "react";

// const StoriesIndexItem = props => {
class StoriesIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <li className='story-list-item'>
        <h3 className='story-item-title'>{this.props.story.title}</h3>
      </li>
    )
  }
}

export default StoriesIndexItem