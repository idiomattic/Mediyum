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

  isOwner() {
    let { deleteStory, story, storyId, currentUserId } = this.props
    return story.author_id === currentUserId ? (
      <div>
        <button className='black-button' onClick={() => this.editStory()}>
          Edit Story
        </button> 
        <button className='black-button' onClick={() => this.props.deleteStory(storyId)}>
          Delete Story
        </button> 
      </div>
      ) : null
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
        {this.isOwner()}
      </div>
    )
  }
}

export default withRouter(StoryShow)