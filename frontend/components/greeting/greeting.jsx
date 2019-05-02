import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, modal }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="modal-button" onClick={() => modal("login")}>Login</button>
      <button className="modal-button" onClick={() => modal("signup")}>Signup</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="modal-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
