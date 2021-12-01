import React from "react"
import { Redirect, withRouter } from "react-router"

class StoryShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yum: {
        yummer_id: props.currentUserId,
        story_id: props.storyId
      }
    }
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

  redirectToShow(authorId) {
    this.props.history.push(`/users/${authorId}`)
  }

  showCommentsModal() {
    this.props.displayModal()
  }

  yumCount() {
    let {yums} = this.props.story
    return yums.length || 0
  }

  handleYum() {
    this.props.createYum(this.state.yum)
      // .then(this.setState({
      //   yum: Object.assign({}, this.state)
      // }))
  }
  
  render() {
    let { story } = this.props
    if (!story || !story.author) {
      return null
    }
    return(
      <div className='story-show'>
        <h2 className='story-title'>{story.title}</h2>
        <br />
        <div className='story-info'>
          <div className='author' onClick={() => this.redirectToShow(story.author_id)}>{story.author.name}</div>
        </div>
        <p className='story-body'>{story.body}</p>
        <br />
        <div className='story-footer'>
          <div className='yum-nav'>
            <div className='yum-button' onClick={() => this.handleYum()}>
              Yum
            </div>
            <div className='yum-count'>
              {this.yumCount()}
            </div>
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