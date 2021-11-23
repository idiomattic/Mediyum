import React from "react";

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

  handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state)
      .then(() => this.props.hideModal())
      .then(() => this.props.clearErrors())
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
    return (this.props.formType === 'Sign In') ? 'Welcome Back.' : 'Join Mediyum.'
  }

  render() {
    return(
      <div className='session-form-div'>
        <h2 className='form-greeting' >{this.formGreeting()}</h2>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <label>Your Email
            <br />
            <input className='credentials' type="email" value={this.state.email} onChange={this.update('email')} />
          </label>
          <br />
          <label>Your Password
            <br />
            <input className='credentials' type="password" value={this.state.password} onChange={this.update('password')} />
          </label>
          <br />
          {this.handleErrors()}
          <br />
          <input className='black-button' type="submit" value={this.props.formType} />
          <br />
          {this.props.otherForm}
        </form>
      </div>
    )
  }
}

export default SessionForm