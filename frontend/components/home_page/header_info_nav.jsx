import React from "react";
import { Link } from "react-router-dom";

const HeaderInfoNav = () => (
    <header className="tool-header"> 
      <ul className="header-links">
        <li><Link to="/allSongs">All Songs</Link></li>
        <li><Link to="/artists">All Artists</Link></li>
      </ul>
    </header>
);

export default HeaderInfoNav;
