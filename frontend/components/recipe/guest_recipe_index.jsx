import React from "react"
import RecipesIndexItemContainer from "./recipes_index_item_container"
// const moment = require('moment')

class GuestRecipesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchRecipes()
  }

  showSix(recipes) {
    // console.log(moment(recipe.updated_at)._i)
    return(
      recipes.sort((a, b) => {
        return new Date(b.updated_at) - new Date(a.updated_at)
      }).map((recipe, i) => {
        return(
          <RecipesIndexItemContainer key={i} recipe={recipe} />
        )
      })
    )
  }

  render() {
    const { recipes } = this.props
    if (!recipes) { 
      return null
    }
    return(
      <div className='guest-recipes-index'>
        <ul className='guest-recipes-list'>
          {this.showSix(recipes)}
        </ul>
      </div>
    )
  }
}

export default GuestRecipesIndex