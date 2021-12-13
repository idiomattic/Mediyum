import React from "react"
import RecipesIndexItemContainer from "./recipes_index_item_container"

class RecipesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  showAll(recipes) {
    return(
      recipes.map((recipe, i) => 
        <RecipesIndexItemContainer key={i} recipe={recipe} />
      )
    )
  }

  // showFeed() {
  //   const {recipes} = this.props
  //   const {followed_recipes} = this.props.currentUser
  //   if (this.state.whichFeed === 'recommended') {
  //     return(this.showAll(recipes))
  //   }
  // }

  render() {
    const { recipes } = this.props
    if (!recipes) { 
      return null
    }
    return(
      <div className='recipes-index'>
        <div className='index-nav'>
          <h2 className='recommended-recipes'>RECOMMENDED FOR YOU</h2>
          <div className='right-padding'></div>
        </div>
        <ul className='recipes-list'>
          {this.showAll(recipes)}
        </ul>
      </div>
    )
  }
}

export default RecipesIndex