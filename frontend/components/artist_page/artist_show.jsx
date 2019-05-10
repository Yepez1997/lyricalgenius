import React from "react";
import ReactDOM from "react-dom";
import HeaderMainNavContainer from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";
import Modal from "../modal/modal";

class ArtistShow extends React.Component {
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

        // if (isNaN(parseInt(this.props.match.params.artistId))) {
        //     return <AristLetterContainer />
        // } else {
        //     return <RegularArtistShow />
        // }
        return (
            <>
            <Modal/>
            <HeaderMainNavContainer />
            <HeaderInfoNav /> 
            <div className="artist-header-artists"> 
                <img src={this.props.artist.photo}/>
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

export default ArtistShow;