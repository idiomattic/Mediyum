import React from "react"
import RecipesIndexItem from "./recipes_index_item"
import RecipesIndexItemContainer from "./recipes_index_item_container"

class RecipesIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whichFeed: 'recommended'
    }
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  filterForFollowing() {
    const {recipes, currentUser} = this.props
    console.log(currentUser)
    debugger
  }

  showAll() {
    const {recipes} = this.props
    return(
      recipes.map((recipe, i) => 
        <RecipesIndexItemContainer key={i} recipe={recipe} />
      )
    )
  }

  feed() {
    return this.state.whichFeed === 'recommended' ? 
      this.showAll() 
      : this.filterForFollowing()
  }

  showFollowing() {
    this.setState({
      whichFeed: 'following'
    })
  }

  showRecommended() {
    this.setState({
      whichFeed: 'recommended'
    })
  }

  render() {
    const { recipes } = this.props
    if (!recipes) { 
      return null
    }
    return(
      <div className='recipes-index'>
        <div className='index-nav'>
          <h2 className='following-recipes' onClick={() => this.showFollowing()} >FOLLOWING</h2>
          <h2 className='recommended-recipes' onClick={() => this.showRecommended()}>RECOMMENDED FOR YOU</h2>
          <div className='right-padding'></div>
        </div>
        <ul className='recipes-list'>
          {/* {
            recipes.map((recipe, i) => 
              <RecipesIndexItemContainer key={i} recipe={recipe} />
            )
          } */}
          {this.feed()}
        </ul>
      </div>
    )
  }
}

export default RecipesIndex