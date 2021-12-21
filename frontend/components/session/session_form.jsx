import React from "react";
import { withRouter } from "react-router";

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      photoFile: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
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

  handleFile(e) {
    this.setState({
      photoFile: e.currentTarget.files[0]
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('user[email]', this.state.email)
    formData.append('user[password]', this.state.password)
    formData.append('user[name]', this.state.name)
    formData.append('user[photo]', this.state.photoFile)
    this.props.action(formData)
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
        <label>First, your name?
          <br />
          <input type="text" className='credentials' value={this.state.name} onChange={this.update('name')}/>
        </label>
        <br />
      </>
      : null
  }

  photoButton() {
    let fileLabel = this.state.photoFile ? this.state.photoFile.name : 'Choose your photo'
    return this.props.formType === 'Sign Up' ?             
    <label className="photo-label">{fileLabel}
      <input type="file" form='user-photo-form' className="photo-input" onChange={e => this.handleFile(e)}/>
    </label>
    : null
  }

  render() {
    return(
      <div className='session-form-div'>
        <h2 className='form-greeting' >{this.formGreeting()}</h2>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <span className='close-button' onClick={() => this.props.hideModal()}>&times;</span>
          {this.nameField()}
          <label>Enter your email here:
            <br />
            <input className='credentials' 
              type="email" 
              value={this.state.email} 
              onChange={this.update('email')} />
          </label>
          <br />
          <label>Your password:
            <br />
            <input className='credentials' 
              type="password" 
              value={this.state.password} 
              onChange={this.update('password')} />
          </label>
          <br />
          {this.handleErrors()}
          <br />
          {this.photoButton()}
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