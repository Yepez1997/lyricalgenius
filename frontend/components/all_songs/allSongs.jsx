import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import HeaderMainNavContainer from '../home_page/header_main_nav_container';
import HeaderInfoNav from '../home_page/header_info_nav';

class AllSongs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const songs = this.props.songs.map((song, index) => {
        let verified = song.artist_verified ? "✅" : " ";
        return (
          <Link to={`/songs/${song.id}`}>
            <ul className="songInfo" key={song.id}>
              <li className="songInfo-number"> {index + 1} </li>
              <li className="songInfo-image">
                <img src={song.photo} />
              </li>
              <li className="songInfo-name">
                <span className="songInfo-title">{song.title}</span>
                <span className="songInfo-artist">
                  {song.artist} {verified}
                </span>
              </li>
            </ul>
          </Link>
        );
    });
    return (
        <>
        <HeaderMainNavContainer/>   
        <HeaderInfoNav/>
        <div className="align-center-home">
          <h1 className="all-charts-title"> All Songs</h1>
          <div className="songInfo-box">{songs}</div>;
        </div>
        <div className="tempFooter"> 
            <p> TEMP </p>
        </div>
        </>
    )
  }
}

export default AllSongs;