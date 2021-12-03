import React from "react"
import RecipesIndexContainer from "../recipe/recipes_index_container"

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUserId} = this.props
    if (!currentUserId) {
      return (
        <div className='welcome'>
          <h1>Mediyum is a place to write, read, and connect</h1>
          <p>It's easy and free to post your recipes.</p>
        </div>
      )
    }
    return(
      <div className='home-page'>
        <RecipesIndexContainer />
      </div>
    )
  }
}

export default Home