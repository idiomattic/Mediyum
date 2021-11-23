import React from "react"
import SignInFormContainer from '../session/signin_form_container'
import { Link } from "react-router-dom"

class GuestNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'demo@demo.demo',
      password: 'qwerty'
    }
  }

  render() {
    return(
      <div className='guest-nav'>
        <div className='nav-buttons'>
          <Link to='/feed' onClick={() => this.props.signIn(this.state)}>Demo</Link>
          <Link to='/' onClick={() => this.props.displayModal('Sign In')}>Sign In</Link>
          <Link className='black-button' 
            to='/' onClick={() => this.props.displayModal('Sign Up')}>Get Started</Link>

        </div>
      </div>
    )
  }
}

export default GuestNav