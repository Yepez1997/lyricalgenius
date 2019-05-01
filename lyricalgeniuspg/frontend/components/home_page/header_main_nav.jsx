import React from 'react';
import {Link} from 'react-router-dom';

const HeaderMainNav = () => (
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
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  </header>
);

export default HeaderMainNav;