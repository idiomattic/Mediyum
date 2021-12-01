import React from "react"
import RecipesIndex from "../recipe/recipes_index"
import RecipesIndexContainer from "../recipe/recipes_index_container"

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUserId} = this.props
    return(
      <div className='home-page'>
        <RecipesIndexContainer />
      </div>
    )
  }
}

export default Home