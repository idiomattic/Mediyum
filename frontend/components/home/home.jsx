import React from "react"
import HeaderContainer from "../header/header_container"

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {currentUserId} = this.props
    return(
      <div className='home-page'>
        <p>Home</p>
      </div>
    )
  }
}

export default Home