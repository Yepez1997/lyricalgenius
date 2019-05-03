import React from 'react';

/* Renders the Top Charts Section */
// Test with LI's 
class TopCharts extends React.Component { 
    constructor(props) {
        super(props);
    }
    componentDidMount() {
      this.props.fetchSongs();
    }


    render() {
        //TODO: INJECT ALL DATA FROM DATABASE HERE 
        const songs = this.props.songs.map((song, index) => {
          let verified = song.artist_verified ? '✅' : " ";
          debugger
          return (
            <ul className="songInfo" key={song.id}>
              <li className="songInfo-number"> {index + 1} </li>
              <li className="songInfo-image"> Dummy-Info </li>
              <li className="songInfo-name">
                <span className="songInfo-title">{song.title}</span>
                <span className="songInfo-artist">
                  {song.artist} {verified}
                </span>
              </li>
            </ul>
          );
        })
        return (
          <div className="songInfo-box">
            {songs}
          </div>
        );
    }
}

export default TopCharts;