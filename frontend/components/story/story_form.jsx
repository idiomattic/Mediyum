import React from "react";

class StoryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      author_id: this.props.currentUserId
    }
  }

  render() {
    return(
      <div>Story</div>
    )
  }
}

export default StoryForm