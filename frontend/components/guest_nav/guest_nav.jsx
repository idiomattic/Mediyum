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
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleSignIn() {
    const formData = new FormData()
    formData.append('user[email]', this.state.email)
    formData.append('user[password]', this.state.password)
    this.props.signIn(formData)
      .then(res => this.props.history.push('/feed'))
  }

  render() {
    return(
      <div className='guest-nav'>
        <div className='nav-buttons'>
          <Link to='/' onClick={() => this.handleSignIn()} className='header-link'>Demo</Link>
          <Link to='/' onClick={() => this.props.displayModal('Sign In')} className='header-link'>Sign In</Link>
          <Link className='black-button' 
            to='/' onClick={() => this.props.displayModal('Sign Up')}>Get Started</Link>

        </div>
      </div>
    )
  }
}

export default GuestNav