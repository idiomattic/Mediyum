import React from "react"

class StoryShow extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchStory(this.props.storyId)
  }

  render() {
    let { story } = this.props
    if (!story) {
      return null
    }
    return(
      <div className='story-show'>
        <h2 className='story-title'>{story.title}</h2>
        <p className='story-body'>{story.body}</p>
      </div>
    )
  }
}

export default StoryShow