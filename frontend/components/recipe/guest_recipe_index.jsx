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
    return(
      recipes
        .sort((a, b) => {return new Date(b.created_at) - new Date(a.created_at)})
        .slice(0, 6)
        .map((recipe, i) => {
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