import React from 'react';
import {Link} from 'react-router-dom';

const HeaderMainNav = (props) => (
  //TODO: ADD TO CHANGE
  <header className="genius-header">
    <div className="search-input">
      <input type="text" value="Search Lyrics & More" />
    </div>
    <div className="logo-link">
      <Link to="/" className="logo-link">
        <h1>Genius</h1>
      </Link>
    </div>
    <div className="user-buttons">
      <button className="modal-button" onClick={() => props.modal("login")}>Login</button>
      <button className="modal-button" onClick={() => props.modal("signup")}>Signup</button>
    </div>
  </header>
);
// need to get make a container to have access to state 
// and get the modal function 

export default HeaderMainNav;