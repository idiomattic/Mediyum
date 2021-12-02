import React from "react"
import RecipesIndexItem from "./recipes_index_item"
import RecipesIndexItemContainer from "./recipes_index_item_container"

class RecipesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  filterForFollowing() {

  }

  showAll() {
    const {recipes} = this.props
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
          <h2 className='following-recipes'>FOLLOWING</h2>
          <h2 className='recommended-recipes'>RECOMMENDED FOR YOU</h2>
          <h2 className='right-padding'></h2>
        </div>
        <ul className='recipes-list'>
          {/* {
            recipes.map((recipe, i) => 
              <RecipesIndexItemContainer key={i} recipe={recipe} />
            )
          } */}
          {this.showAll()}
        </ul>
      </div>
    )
  }
}

export default RecipesIndex