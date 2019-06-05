import React from 'react';
import HeaderMainNavContainter from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";
import ArtistsFooterNav from "../home_page/artists_footer_nav";
import Modal from "../modal/modal";
import {Link} from 'react-router-dom';

class ArtistLetterShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {filteredArtists: []}
        this.filterArtists = this.filterArtists.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.artistId !== prevProps.match.params.artistId ) {
          this.props.fetchArtists();
          this.setState({filteredArtists: []})
        }
    }

    componentDidMount() {
        this.props.fetchArtists();
    }

    filterArtists(artists) {
        let filtered = [];
        if (!artists) {
            return null;
        }
        for (let i in artists) {
            if (artists[i].name.slice(0,1).toLowerCase() === this.props.match.params.artistId.toLowerCase()) {
                filtered.push(artists[i]);
            }
        }
        return filtered; 
    }

    render() {
        if (!this.props.artists) {
            return null;
        }
        let filtered = this.filterArtists(this.props.artists);
        const artists = filtered.map((artist) => {
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
              <h1 className="artist-header-h1"> Most Popular {this.props.match.params.artistId} Artists </h1>
              <ul>{artists}</ul>
            </div>
          </>
        );
    }
}

export default ArtistLetterShow;