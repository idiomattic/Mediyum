import React from "react"
import SignInFormContainer from '../session/signin_form_container'
import { Link } from "react-router-dom"

class GuestNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div className='guest-nav'>
        <div className='nav-buttons'>
          <Link to='/' onClick={() => this.props.displayModal('Sign In')}>Sign In</Link>
          <Link to='/' onClick={() => this.props.displayModal('Sign Up')}>Get Started</Link>

        </div>
      </div>
    )
  }
}

export default GuestNav