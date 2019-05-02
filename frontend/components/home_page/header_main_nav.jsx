import React from 'react';
import {Link} from 'react-router-dom';

const HeaderMainNav = (props) => {
  //TODO: ADD TO CHANGE

  const logOut = () => (
    <>
    <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
    <button className="modal-button" onClick={() => props.logout()}>Log Out</button>
    </>
  );

  const signInSignUp = () => (
    <>
    <button className="modal-button" onClick={() => props.modal("login")}>Login</button>
    <button className="modal-button" onClick={() => props.modal("signup")}>Signup</button>
    </>
  );

  const showButtonStatus = props.currentUser ? logOut() : signInSignUp();

  return (  
    <header className="genius-header">
      <div className="search-input">
        <input type="text" value="" placeholder="Search Lyrics & More" />
      </div>
      <div className="logo-link">
        <Link to="/" className="logo-link">
          <h1>Genius</h1>
        </Link>
      </div>
      <div className="user-buttons">
         {showButtonStatus}
      </div>
    </header>
    );
  };
// need to get make a container to have access to state 
// and get the modal function 
// here we want to do if the current user exists use the log in log out features else 
// replace thse with a log out button 

export default HeaderMainNav;