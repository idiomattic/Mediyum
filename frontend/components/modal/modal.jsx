import React from "react";
import DropdownModalContainer from "../dropdown_modal/dropdown_modal_container";
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
    case 'Sign Up':
      component = <SignUpFormContainer />;
    case 'Dropdown':
      component = <DropdownModalContainer />
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