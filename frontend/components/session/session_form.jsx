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
    this.props.hideModal()
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  handleErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    )
  }

  render() {
    return(
      <div className='session-form-div'>
        <form className='session-form' onSubmit={this.handleSubmit}>
        {this.handleErrors()}
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
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default SessionForm