import React from "react";
import { connect } from "react-redux";
import SignInFormContainer from "../session/signin_form_container";
import SignUpFormContainer from '../session/signup_form_container'

function Modal({modal, hideModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Sign In':
      component = <SignInFormContainer />;
      break;
    case 'Sign Up':
      component = <SignUpFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={hideModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal