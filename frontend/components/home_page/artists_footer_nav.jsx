import React from "react";
import {Link} from 'react-router-dom';
const ArtistsFooterNav = () => (
    <>
    <footer className="footer">
        <footer className="footer-info">
            <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Devlopers</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Copyright Policy</a></li>
            <li><a href="#">Contact Us</a></li>
            </ul>
        </footer>
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
                    <li><Link to={`/artists/A`}>A</Link></li>
                    <li><Link to={`/artists/B`}>B</Link></li>
                    <li><Link to={`/artists/C`}>C</Link></li>
                    <li><Link to={`/artists/D`}>D</Link></li>
                    <li><Link to={`/artists/E`}>E</Link></li>
                    <li><Link to={`/artists/F`}>F</Link></li>
                    <li><Link to={`/artists/G`}>G</Link></li>
                    <li><Link to={`/artists/H`}>H</Link></li>
                    <li><Link to={`/artists/I`}>I</Link></li>
                    <li><Link to={`/artists/J`}>J</Link></li>
                    <li><Link to={`/artists/K`}>K</Link></li>
                    <li><Link to={`/artists/L`}>L</Link></li>
                    <li><Link to={`/artists/M`}>M</Link></li>
                    <li><Link to={`/artists/N`}>N</Link></li>
                    <li><Link to={`/artists/O`}>O</Link></li>
                    <li><Link to={`/artists/P`}>P</Link></li>
                    <li><Link to={`/artists/Q`}>Q</Link></li>
                    <li><Link to={`/artists/R`}>R</Link></li>
                    <li><Link to={`/artists/S`}>S</Link></li>
                    <li><Link to={`/artists/T`}>T</Link></li>
                    <li><Link to={`/artists/U`}>U</Link></li>
                    <li><Link to={`/artists/V`}>V</Link></li>
                    <li><Link to={`/artists/W`}>W</Link></li>
                    <li><Link to={`/artists/X`}>X</Link></li>
                    <li><Link to={`/artists/Y`}>Y</Link></li>
                    <li><Link to={`/artists/Z`}>Z</Link></li>
                </div>
            </ul>
        </footer>
    </footer>
  </>
);

export default ArtistsFooterNav;