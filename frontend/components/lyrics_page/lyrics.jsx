import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMainNavContainer from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";
import Modal from '../modal/modal';
import AnnotationFormContainer from '../annotation_form/annotation_form_container';

// get this.props.match.params.songId
// request this information 

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
    //this.reply_click = this.reply_click.bind(this);
    // this.state = {
    //   bgColor: 'white'
    // }
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
    // $("button").click(function () {
    //   alert(); 
    // });
  }

  //TODO: remove function later on 
  reply_click(e) {
    // e.preventDefault();
    // // console.log('wtf');
    
    // this.setState({ [field]: e.target.value });
    this.props.receiveLink(parseInt(e.currentTarget.className));
    console.log(e.currentTarget.className);
    // this.setState({
    //   bgColor: 'red'
    // });
    // alert(e.currentTarget.className)
  }
  

  render() {
    if (!this.props.song) {
        return null;
    }

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
        <button className={`${index}`} 
        onClick={this.reply_click.bind(this)} 
        key={index} 
        > {htmlLyric[index].innerHTML} </button>
      );
    });

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
              {htmlLyricMap}
            </div>
            <div className="comment-column-layout">
                <AnnotationFormContainer/>
            </div>
        </div>
      </>
    );
  }
}

export default Lyrics;