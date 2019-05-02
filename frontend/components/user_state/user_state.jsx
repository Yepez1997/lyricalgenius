import React from 'react';
import { Link } from 'react-router-dom';



const UserState = ({ currentUser, logout, modal }) => {
  const sessionLinks = () => (
    <>
      <button className="modal-button" onClick={() => modal("login")}>Login</button>
      <button className="modal-button" onClick={() => modal("signup")}>Signup</button>
    </>
  );
  const personalGreeting = () => (
    <button className="modal-button" onClick={logout}>Log Out</button>
   
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default UserState;
