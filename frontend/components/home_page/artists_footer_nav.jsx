import React from "react";
import {Link} from 'react-router-dom';
const ArtistsFooterNav = () => (
  <>
    <footer className="footer">
      <footer className="artists-footer">
        <ul className="footer-artist-links">
          <div className="verified-artist">
            <Link to="/artists">
              <li>Verified Artists</li>
            </Link>
          </div>
          <div className="all-artists">
            
            <span> All Artists </span>
          </div>
          <div className="artist-letters">
            <li>
              <Link to={`/artistsSearch/A`}>A</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/B`}>B</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/C`}>C</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/D`}>D</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/E`}>E</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/F`}>F</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/G`}>G</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/H`}>H</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/I`}>I</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/J`}>J</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/K`}>K</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/L`}>L</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/M`}>M</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/N`}>N</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/O`}>O</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/P`}>P</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/Q`}>Q</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/R`}>R</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/S`}>S</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/T`}>T</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/U`}>U</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/V`}>V</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/W`}>W</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/X`}>X</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/Y`}>Y</Link>
            </li>
            <li>
              <Link to={`/artistsSearch/Z`}>Z</Link>
            </li>
          </div>
        </ul>
      </footer>
    </footer>
  </>
);

export default ArtistsFooterNav;