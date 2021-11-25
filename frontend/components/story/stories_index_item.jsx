import React from "react";
import { withRouter } from "react-router";

// const StoriesIndexItem = props => {
class StoriesIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push(`/stories/${this.props.story.id}`)
  }

  render() {
    return(
      <li className='story-list-item'>
        <h3 onClick={() => this.handleClick()} className='story-item-title'>{this.props.story.title}</h3>
      </li>
    )
  }
}

export default withRouter(StoriesIndexItem)