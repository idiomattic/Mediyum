import React from "react"
import RecipesIndexItemContainer from "./recipes_index_item_container"

class GuestRecipesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchRecipes()
  }

  showSix(recipes) {
    console.log(recipes)
    return(
      recipes.map((recipe, i) => 
        <RecipesIndexItemContainer key={i} recipe={recipe} />
      )
    )
  }

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
          {this.showSix(recipes)}
        </ul>
      </div>
    )
  }
}

export default GuestRecipesIndex