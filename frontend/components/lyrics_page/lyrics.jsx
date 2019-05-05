import React from 'react';
import ReactDOM from 'react-dom';
import HeaderMainNavContainer from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";

// get this.props.match.params.songId
// request this information 

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
    //this.reply_click = this.reply_click.bind(this);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
    // $("button").click(function () {
    //   alert(); 
    // });
  }

  reply_click(e) {
    // e.preventDefault();
    // // console.log('wtf');
    
    // this.setState({ [field]: e.target.value });
    console.log(e.currentTarget.className);
    // alert(e.currentTarget.className)
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
        <button className={`${index}`} onClick={this.reply_click.bind(this)} key={index}> {htmlLyric[index].innerHTML} </button>
      );
    });

    return (
      <>
        <HeaderMainNavContainer />
        <HeaderInfoNav /> 
        <div className="artist-header"> 
            <img src={this.props.song.photo}/>
        </div>
        <div className="main-section">
            <div className="song-lyrics-body"> 
              <h1 id="song-title"> {this.props.song.title} LYRICS</h1>
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