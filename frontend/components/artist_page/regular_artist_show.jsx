import React from "react";
import HeaderMainNavContainer from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";
import Modal from "../modal/modal";
import ArtistsFooterNav from "../home_page/artists_footer_nav";
import {Link} from 'react-router-dom';

class RegularArtistShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      this.props.fetchArtist(this.props.match.params.artistId);
    }
    
    render() {
        if (!this.props.artist) {
            return null;
        }
        if (!this.props.artist.songs) {
          return null;
        }
      
      const songs = this.props.artist.songs.map((song, index) => {
        if (index < 5) {
            return (
              <Link to={`/songs/${song.id}`}>
                <ul className="songInfo-a" key={song.id}>
                  <li className="songInfo-imagea-a"> <img src={song.photo} /> </li>
                  <li className="songInfo-name-a">
                    <span className="songInfo-title-a">{song.title}</span>
                  </li>
                </ul>
              </Link>
            );
          }
      })
    return (
      <>
        <Modal />
        <HeaderMainNavContainer />
        <HeaderInfoNav />
        <div className="artist-header-artists">
          <img src={this.props.artist.photo} />
          <div className="artist-container-2">
            <div className="album-image-artist">
              <img src={this.props.artist.photo} />
            </div>
            <h1> {this.props.artist.name} </h1>
          </div>
          <div class="popular-songs">
            <h1> POPULAR {this.props.artist.name.toUpperCase()} SONGS </h1>
            <br></br>
            <div class="all-songs">
                {songs}
            </div>
          </div>
        </div>
        <ArtistsFooterNav/>
      </>
    );
    }
}

export default RegularArtistShow;