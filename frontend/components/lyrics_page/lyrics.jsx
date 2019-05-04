import React from 'react';
import HeaderMainNavContainer from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";

// get this.props.match.params.songId
// request this information 

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }

  render() {
    if (!this.props.song) {
        return null
    }
    return (
      <>
        <HeaderMainNavContainer />
        <HeaderInfoNav /> 
        <div className="artist-header"> 
            <p> </p>
        </div>
        <div className="main-section">
            <p className="song-lyrics-body"> {this.props.song.lyrics} </p>
            <div className="comment-column-layout">
                <p> </p>
            </div>  
        </div>
      </>
    );
  }
}

export default Lyrics;