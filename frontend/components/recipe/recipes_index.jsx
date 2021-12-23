import React from "react"
import RecipesIndexItemContainer from "./recipes_index_item_container"

class RecipesIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numRecipes: 10
    }
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  showAll(recipes) {
    return(
      recipes
        .sort((a, b) => {return new Date(b.created_at) - new Date(a.created_at)})
        .map((recipe, i) => 
          <RecipesIndexItemContainer key={i} recipe={recipe}/>
        )
    )
  }

  render() {
    const { recipes } = this.props
    let tempNumRecipes = this.state.numRecipes
    let recipesSlice = recipes.reverse().slice(0, tempNumRecipes)
    if (!recipesSlice) { 
      return null
    }
    return(
      <div className='recipes-index'>
        <div className='index-nav'>
          <h2 className='recommended-recipes'>RECOMMENDED FOR YOU</h2>
          <div className='right-padding'></div>
        </div>
        <ul className='recipes-list'>
          {this.showAll(recipesSlice)}
        </ul>
        <div className='show-more' 
          onClick={() => this.setState({numRecipes : (tempNumRecipes + 10)})}>See More Recipes</div>
      </div>
    )
  }
}

export default RecipesIndex