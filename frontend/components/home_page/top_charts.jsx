import React from 'react';
import { Link } from 'react-router-dom';

/* Renders the Top Charts Section */
// Test with LI's 
class TopCharts extends React.Component { 
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
      // can i set a constraint here to retreive fewer songs 
      this.props.fetchSongs();
    }



    //<Link to=`/songs/${song.id}`> {song.title } </Link>
    render() {
        //TODO: HOW TO FETCH FEW DATA 
        // TODO: AWS -> 
        const songs = this.props.songs.map((song, index) => {
          let verified = song.artist_verified ? '✅' : " ";
          return (
            <Link to={`/songs/${song.id}`}>
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
            </Link>
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