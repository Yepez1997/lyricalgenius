import React from "react";
import {Link} from 'react-router-dom';
// FIXME: REFRACTOR CODE 
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
                <li><a href="#">A</a></li>
                <li><a href="#">B</a></li>
                <li><a href="#">C</a></li>
                <li><a href="#">D</a></li>
                <li><a href="#">E</a></li>
                <li><a href="#">F</a></li>
                <li><a href="#">G</a></li>
                <li><a href="#">H</a></li>
                <li><a href="#">I</a></li>
                <li><a href="#">J</a></li>
                <li><a href="#">K</a></li>
                <li><a href="#">L</a></li>
                <li><a href="#">M</a></li>
                <li><a href="#">N</a></li>
                <li><a href="#">O</a></li>
                <li><a href="#">P</a></li>
                <li><a href="#">Q</a></li>
                <li><a href="#">R</a></li>
                <li><a href="#">S</a></li>
                <li><a href="#">T</a></li>
                <li><a href="#">U</a></li>
                <li><a href="#">V</a></li>
                <li><a href="#">W</a></li>
                <li><a href="#">X</a></li>
                <li><a href="#">Y</a></li>
                <li><a href="#">Z</a></li>
                </div>
            </ul>
        </footer>
    </footer>
  </>
);

export default ArtistsFooterNav;