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
    let {story} = this.props
    console.log('in redirect', this.props)
    this.props.history.push(`/users/${story.author.id}`)
  }

  render() {
    let {story} = this.props
    let {author} = this.props.story
    // debugger
    return(
      <li className='story-list-item'>
        <Link to={`/users/${author.id}`} >{author.name}</Link>
        <h3 onClick={() => this.handleClick()} className='story-item-title'>{this.props.story.title}</h3>
      </li>
    )
  }
}

export default withRouter(StoriesIndexItem)