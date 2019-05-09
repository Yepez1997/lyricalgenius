import React from 'react';
import HeaderMainNavContainter from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";
import ArtistsFooterNav from "../home_page/artists_footer_nav";
import Modal from "../modal/modal";
import {Link} from 'react-router-dom';


class ArtistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchArtists();
    }

    render() {
        if (!this.props.artists) {
            return null;
        }
        const artist = this.props.artists.map((artist) => {
            return (
                
                <Link to={`/artists/${artist.id}`}>
                <li key={artist.id} className="artist-name" key={artist.id}> {artist.name} </li>
                </Link>
            );
        });
        return (
          <>
            <Modal/>
            <header>
              <HeaderMainNavContainter />
              <HeaderInfoNav />
              <ArtistsFooterNav />
            </header>
            <div className="main">
              <h1 className="artist-header-h1"> Most Popular Artists </h1>
              <ul>{artist}</ul>
            </div>
          </>
        );
    }
} 


export default ArtistIndex;