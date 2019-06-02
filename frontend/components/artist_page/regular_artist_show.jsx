import React from "react";
import HeaderMainNavContainer from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";
import Modal from "../modal/modal";

function RegularArtistShow(props) {
    return (
        <>
            <Modal />
            <HeaderMainNavContainer />
            <HeaderInfoNav />
            <div className="artist-header-artists">
                <img src={props.artists.photo} />
                <div className="artist-container">
                    <div className="album-image-artist">
                        <img src={props.artists.photo} />
                    </div>
                    <div className="album-info">
                        <h1> HERE  </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegularArtistShow;