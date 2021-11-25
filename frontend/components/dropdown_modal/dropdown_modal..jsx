import React from "react";
import { Link } from "react-router-dom";

function DropdownModal({modal, hideModal}) {
  if (!modal) {
    return null;
  }



  return (
    // <div className="dropdown-modal-background" onClick={hideModal}>
      // <div className="dropdown-modal-child" onClick={e => e.stopPropagation()}>
        <ul className='dropdown-list'>
          <li className='write-story'>
            Write a story
          </li>
          <li className='sign-out'>
            <Link to='/' onClick={() => this.props.signOut()}>Sign Out</Link>
          </li>
        </ul>
      // </div>
    // </div>
  );
}

export default DropdownModal