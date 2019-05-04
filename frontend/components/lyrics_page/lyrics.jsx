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
    // the juice 
    // .values 
    const lyrics = this.props.song.lyrics;
    let htmlLyricObject = $(lyrics);
  
    // let htmlLyric = htmlLyricObject.map((el) => {
    //   return (
    //     <p> {el} </p>
    //   );
    // });
    let htmlLyric = Object.values(htmlLyricObject);
    let htmlLyricMap = htmlLyric.map((el, index) => {
      return ( 
       <p> {htmlLyric[index].innerHTML} </p>
      );
    });
    debugger
    return (
      <>
        <HeaderMainNavContainer />
        <HeaderInfoNav /> 
        <div className="artist-header"> 
            <p> </p>
        </div>
        <div className="main-section">
            <div className="song-lyrics-body"> 
              {htmlLyricMap}
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