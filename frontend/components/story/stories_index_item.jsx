import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class StoriesIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.history.push(`/stories/${this.props.story.id}`)
  }

  redirectToShow() {
    let authorId = this.props.story.author.id
    this.props.history.push(`/users/${authorId}`)
  }

  author() {
    let storyAuthor = this.props.story.author.name
    return(
      <Link to={`/users/${storyAuthor.id}`} >{storyAuthor}</Link>
    )
  }

  render() {
    return(
      <li className='story-list-item'>
        {this.author()}
        <h3 onClick={() => this.handleClick()} className='story-item-title'>{this.props.story.title}</h3>
      </li>
    )
  }
}

export default withRouter(StoriesIndexItem)