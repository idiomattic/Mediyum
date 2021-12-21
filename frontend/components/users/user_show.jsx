import React from "react"
import { withRouter } from "react-router"
import UserRecipesIndexItem from "../recipe/user_recipes_index_item"
import { Link } from "react-router-dom"


class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      follow :{
        follower_id: this.props.currentUserId,
        followed_user_id: this.props.userId
      },
      photoFile: this.props.user.photoUrl || null
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

  toggleFollow() {
    let {followers, currentUserId, receivedFollows} = this.props
    let following = Boolean(followers[currentUserId])
    if (following) {
      let followToDelete = Object.values(receivedFollows).filter(follow => follow.follower_id === currentUserId)[0]
      this.props.deleteFollow(followToDelete)
        .then(this.setState({
          following: false
        }))
    } else {
      this.props.createFollow(this.state.follow)
        .then(this.setState({
          following: true
        }))
    }
  }

  displayFollowButton() {
    let {followers, userId, currentUserId} = this.props
    let buttonText
    if (followers) {
      buttonText = followers[currentUserId] ? 'Following' : 'Follow'
    } else {
      buttonText = ''
    }
    return (
      <button className='green-button' id={buttonText} onClick={() => this.toggleFollow()}>{buttonText}</button>
    )
  }

  followerCount() {
    let {followers} = this.props
    let followersCount = !followers ? 0 : Object.values(followers).length
    let unit = (followersCount === 1) ? 'Follower' : 'Followers'
    return(
      <div className='follower-count'>
        <p className='number-followers'>{followersCount}</p>
        <p className="unit">{unit}</p>
      </div>
    )
  }

  isSelf() {
    let {userId, currentUserId} = this.props
    return userId === currentUserId ? null : this.displayFollowButton()
  }

  // photoButton() {
  //   let {userId, currentUserId} = this.props
  //   let fileLabel = this.state.photoFile ? this.state.photoFile.name : 'Choose your photo'
  //   return userId === currentUserId ?             
  //   <label className="photo-label">{fileLabel}
  //     <input type="file" form='user-photo-form' className="photo-input" onChange={e => this.handleFile(e)}/>
  //   </label>
  //   : null
  // }

  // handleFile(e) {
  //   this.setState({
  //     photoFile: e.currentTarget.files[0]
  //   })
  // }

  // showSaveButton() {
  //   return this.state.photoFile ? <input className='publish' type="submit" value='Save' form='user-photo-form' /> : null
  // }

  // handleSubmit(e) {
  //   e.preventDefault()
  //   let {user} = this.props
  //   // const formData = {}
  //   // Object.assign(formData, user)
  //   // formData['photo'] = this.state.photoFile
  //   // let params = {user: formData}
  //   // console.log('handleSubmit params',params)
  //   const formData = new FormData()
  //   formData.append('user[id]', user.id)
  //   formData.append('user[photo]', this.state.photoFile)
  //   console.log('formData', formData)
  //   this.props.updateUser(formData, user.id)
  //     .then(res => this.props.history.push(`/users/${user.id}`))
  // }

  render() {
    let { user, userId, currentUser } = this.props
    let userPhoto = currentUser.photoUrl ? currentUser.photoUrl : 'https://mediyum-dev.s3.us-west-1.amazonaws.com/placeholder_user_image.png'
    if (!user) {
      return null
    }
    return(
      <div className='user-show'>
        <div className='user-show-header'>
          <h2 className='user-title'>{user.name}</h2>
          {this.followerCount()}
          {this.isSelf()}
          <div className='user-show-nav-spacer'></div>
          <div className='user-nav' onClick={() => this.props.displayModal()}>
            <img className='user-photo' src={userPhoto} alt="img" />
          </div>
          <form className='user-photo-form' onSubmit={this.handleSubmit} id='user-photo-form'></form>
        </div>
        <br />
        {this.myRecipes()}
      </div>
    )
  }
}

export default withRouter(UserShow)