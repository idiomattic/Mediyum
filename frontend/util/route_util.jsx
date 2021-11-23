import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router";

const Auth = ({ component: Component, path, signedIn, exact }) => (
  <Route path={path} exact={exact} render={props => (
    !signedIn ? <Component {...props}/> : <Redirect to='/feed'/>
  )}/>
)

const Protected = ({ component: Component, path, signedIn, exact }) => {
  console.log('inside Protected', signedIn)
  return(
  <Route path={path} exact={exact} render={props => (
    signedIn ? <Component {...props} /> : <Redirect to="/" />
  )}/>
)};

const mSTP = state => {
  console.log('inside mSTP', state.session.currentUserId)
  return({
  signedIn: Boolean(state.session.currentUserId)
})}

export const AuthRoute = withRouter(connect(mSTP)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))