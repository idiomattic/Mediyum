import React from "react"
import { withRouter } from "react-router"
import UserRecipesIndexItem from "../recipe/user_recipes_index_item"

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      follow :{
        follower_id: this.props.currentUserId,
        followed_user_id: this.props.userId
      }
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  myRecipes() {
    let {user, currentUserId, userId} = this.props
    let message = currentUserId === userId ? 'You have' : `${user.name} has`
    const recipes = user.recipes || []
    if (recipes.length === 0) {
      return(
        <p className='down-bad-user'>{message} not shared any recipes yet.</p>
      )
    }
    return(
      <ul className='users-recipes-list'>
        {
          recipes.map((recipe, i) => 
            <UserRecipesIndexItem key={i} recipe={recipe} className='users-recipes-list-item'/>
          )
        }
      </ul>
    )
  }

  render() {
    let { user } = this.props
    if (!user) {
      return null
    }
    return(
      <div className='user-show'>
        {this.myRecipes()}
      </div>
    )
  }
}

export default withRouter(UserShow)