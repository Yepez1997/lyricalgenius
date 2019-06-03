import React from "react";
import HeaderMainNavContainer from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";
import Modal from "../modal/modal";

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
    return (
      <>
        <Modal />
        <HeaderMainNavContainer />
        <HeaderInfoNav />
        <div className="artist-header-artists">
          <img src={this.props.artist.photo} />
          <div className="artist-container">
            <div className="album-image-artist">
              <img src={this.props.artist.photo} />
            </div>
            <h1> {this.props.artist.name} </h1>
          </div>
          <div class="popular-songs">
            <h1> POPULAR {this.props.artist.name.toUpperCase()} SONGS </h1>
            <div class="all-songs">
                <h1> JLADNFKJDSNFK </h1>
            </div>
          </div>
        </div>
      </>
    );
    }
}

export default RegularArtistShow;