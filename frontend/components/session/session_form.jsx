import React from "react";
import { withRouter } from "react-router";

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  demoState() {
    this.setState({
      email: 'demo@demo.demo',
      password: 'qwerty'
    })
  }

  redirectToFeed() {
    this.props.history.push('/feed')
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state)
      .then(() => this.props.hideModal())
      .then(() => this.props.clearErrors())
      .then(() => this.redirectToFeed())
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  handleErrors() {
    return(
      <ul className='session-error-list'>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    )
  }

  formGreeting() {
    return this.props.formType === 'Sign In' ? 'Welcome Back.' : 'Join Mediyum.'
  }

  nameField() {
    return this.props.formType === 'Sign Up' ? 
      <>
        <label>Your Name
          <br />
          <input type="text" className='credentials' value={this.state.name} onChange={this.update('name')}/>
        </label>
        <br />
      </>
      : null
  }

  render() {
    return(
      <div className='session-form-div'>
        <h2 className='form-greeting' >{this.formGreeting()}</h2>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <span className='close-button' onClick={() => this.props.hideModal()}>&times;</span>
          {this.nameField()}
          <label>Your Email
            <br />
            <input className='credentials' 
              type="email" 
              value={this.state.email} 
              onChange={this.update('email')} />
          </label>
          <br />
          <label>Your Password
            <br />
            <input className='credentials' 
              type="password" 
              value={this.state.password} 
              onChange={this.update('password')} />
          </label>
          <br />
          {this.handleErrors()}
          <br />
          <input className='black-button' 
            type="submit" 
            value={this.props.formType} />
          <br />
          {this.props.otherForm}
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm)