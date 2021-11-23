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
    this.signinDemo = this.signinDemo.bind(this)
  }

  signinDemo() {
    this.props.signIn(this.state)
  }

  render() {
    return(
      <div className='guest-nav'>
        <div className='nav-buttons'>
          {/* <button onClick={() => this.signinDemo()}>Demo</button> */}
          <Link to='/feed' onClick={() => this.signinDemo()}>Demo</Link>
          <Link to='/' onClick={() => this.props.displayModal('Sign In')}>Sign In</Link>
          <Link className='black-button' 
            to='/' onClick={() => this.props.displayModal('Sign Up')}>Get Started</Link>

        </div>
      </div>
    )
  }
}

export default GuestNav