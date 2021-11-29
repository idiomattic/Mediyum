import React from "react"
import { withRouter } from "react-router"

class StoryShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchStory(this.props.storyId)
  }
  
  editStory() {
    this.props.history.push(`/stories/${this.props.storyId}/edit`)
  }

  canEdit() {
    return this.props.story.author_id === this.props.currentUserId ? 
      <button className='black-button' onClick={() => this.editStory()}>
        Edit Story
      </button> 
      : null
  }

  showCommentsModal() {
    this.props.displayModal()
  }

  render() {
    let { story } = this.props
    if (!story) {
      return null
    }
    return(
      <div className='story-show'>
        <h2 className='story-title'>{story.title}</h2>
        <br />
        <p className='story-body'>{story.body}</p>
        <br />
        <div className='comments-button' onClick={() => this.showCommentsModal()}>
          Comments
        </div>
        <br />
        {this.canEdit()}
      </div>
    )
  }
}

export default withRouter(StoryShow)