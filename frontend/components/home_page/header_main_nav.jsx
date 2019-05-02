import React from 'react';
import {Link} from 'react-router-dom';

const HeaderMainNav = ({currentUser, logout, modal}) => {
  //TODO: ADD TO CHANGE

  const logOut = () => (
    <button className="modal-button" onClick={() => logout()}>Log Out</button>
  );

  const signInSignUp = () => (
    <>
    <button className="modal-button" onClick={() => modal("login")}>Login</button>
    <button className="modal-button" onClick={() => modal("signup")}>Signup</button>
    </>
  );


  const showButton = currentUser ? logOut(currentUser, logout) : signInSignUp();

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
         {showButton}
      </div>
    </header>
    );
  };
// need to get make a container to have access to state 
// and get the modal function 
// here we want to do if the current user exists use the log in log out features else 
// replace thse with a log out button 

export default HeaderMainNav;