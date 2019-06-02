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
                    <div className="album-info">
                        <h1> HERE  </h1>
                    </div>
                </div>
            </div>
        </>
    )
    }
}

export default RegularArtistShow;