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
        <h2>In Guest Nav</h2>
        <div className='nav-buttons'>
          <Link to='/' onClick={() => this.props.displayModal('Sign In')}>Sign In</Link>

        </div>
      </div>
    )
  }
}

export default GuestNav