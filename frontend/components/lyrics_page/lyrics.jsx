import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMainNavContainer from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";
import Modal from '../modal/modal';
// import AnnotationFormContainer from '../annotation_form/annotation_form_container';
import UserAnnotationContainer from "../annotation_form/user_annotation_state_container";
import LyricRow from "./lyric_row";

// get this.props.match.params.songId
// request this information 

class Lyrics extends React.Component {
  
  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
  }


  render() {
    // why do we check this 
    if (!this.props.song) {
        return null;
    }

    if (!this.props.song.lyrics) {
      return null;
    }

    debugger 
    const splitLyrics = lyrics => {
      if (!lyrics) {
        return null;
      }
      const words = lyrics.split(" ");
      let words_strings = [];
      let cols = words.length / 8;
      let words_array = [];
      let count = 0;
      for (let i = 0; i < words.length; i++) {
        if (count === 8) {
          let row = words_array.join(" ");
          words_strings.push(row);
          words_array = [];
          count = 0;
        } else {
          words_array.push(words[i]);
          count++;
        }
      }
      words_strings.push(words.slice(cols * 8).join(" "));
      return words_strings;
    };

    const songLyrics = splitLyrics(this.props.song.lyrics);
    
    // console.log(songLyrics);
    const lyricRows = songLyrics.map((lyrics, index) => {
        return (
          <LyricRow 
          index={index}
          receiveLink={this.props.receiveLink}
          removeLink={this.props.removeLink}
          lyrics={lyrics}/>
        );
    })
    return (
      <>
        <Modal/>
        <HeaderMainNavContainer />
        <HeaderInfoNav /> 
        <div className="artist-header"> 
            <img src={this.props.song.photo}/>
            <div className="artist-container">
              <div className="album-image"> 
                <img src={this.props.song.photo} />
              </div>
              <div className="album-info"> 
                  <h1 className="album-info-title"> {this.props.song.title}</h1>
                  <h1 className="album-info-artist"> {this.props.song.artist}</h1>
                  <h1 className="album-info-album"> Album {this.props.song.album}</h1>
              </div>
            </div>
        </div>
        <div className="main-section">
            <div className="song-lyrics-body"> 
              <h1 id="song-title"> {this.props.song.title} LYRICS</h1>
                {lyricRows}
            </div>
            <div className="comment-column-layout">
                <UserAnnotationContainer/>
            </div>
        </div>
      </>
    );
  }
}

export default Lyrics;