import React from 'react';
import { Link } from 'react-router-dom';


class TopCharts extends React.Component { 
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
      // can i set a constraint here to retreive fewer songs 
      this.props.fetchSongs();
    }

    render() {
        const songs = this.props.songs.map((song, index) => {
          if (index < 9) {
            let verified = song.artist_verified ? '✅' : " ";
            return (
              <Link to={`/songs/${song.id}`}>
                <ul className="songInfo" key={song.id}>
                  <li className="songInfo-number"> {index + 1} </li>
                  <li className="songInfo-image"> <img src={song.photo}/> </li>
                  <li className="songInfo-name">
                    <span className="songInfo-title">{song.title}</span>
                    <span className="songInfo-artist">
                      {song.artist} {verified}
                    </span>
                  </li>
                </ul>
              </Link>
            );
          }
        })
        return (
          <div className="songInfo-box">
            {songs}
          </div>
        );
    }
}

export default TopCharts;