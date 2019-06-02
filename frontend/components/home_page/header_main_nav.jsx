import React from 'react';
import {Link} from 'react-router-dom';
import  UserStateContainer from '../user_state/user_state_container';
import SearchContainer from '../search_bar/search_container';

const HeaderMainNav = ({currentUser, logout, modal}) => {
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
        <SearchContainer/>
      </div>
      <div className="logo-link">
        <Link to="/" className="logo-link">
          <h1>L y r i c a l G e n i u s</h1>
        </Link>
      </div>
      <div className="user-buttons">
         <UserStateContainer/>
      </div>
    </header>
    );
  };

export default HeaderMainNav;