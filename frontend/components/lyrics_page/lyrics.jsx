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
            <div className="song-lyrics-body"> 
                <p className="song-lyrics-row"> HERE IS TEST DATA YEESSSSS  </p>
                <p className="song-lyrics-row"> HERE IS TEST DATA 2  YESSSS </p>
                <p className="song-lyrics-row"> HERE IS TEST DATA 3 YESSSSS </p>
                <p className="song-lyrics-row"> HERE IS TEST DATA 4 YESSSSS </p>
                <p className="song-lyrics-row"> HERE IS TEST DATA 5 YESSSSS </p>
                <p className="song-lyrics-row"> HERE IS TEST DATA 6 YESSSSS </p>
                <p className="song-lyrics-row"> HERE IS TEST DATA 7 YESSSSS </p>
            </div>
            <div className="comment-column-layout">
                <p> </p>
            </div>  
        </div>
      </>
    );
  }
}

export default Lyrics;