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

  handleDelete() {
    let { deleteStory, storyId, history } = this.props
    deleteStory(storyId)
      .then(res => history.push('/feed'))
  }

  isOwner() {
    let { deleteStory, story, storyId, currentUserId } = this.props
    return story.author_id === currentUserId ? (
      <div>
        <button className='black-button' onClick={() => this.editStory()}>
          Edit Story
        </button> 
        <button className='black-button' onClick={() => this.handleDelete()}>
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
        <div className='story-footer'>
          <div className='yum-button'>
            Yum
          </div>
          <div className='comments-button' onClick={() => this.showCommentsModal()}>
            Comments
          </div>
        </div>
        <br />
        {this.isOwner()}
      </div>
    )
  }
}

export default withRouter(StoryShow)