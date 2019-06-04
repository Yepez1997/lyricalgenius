import React from 'react';
import {Link} from 'react-router-dom';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // filtered should be a combo of both artist and songs
    this.state = {
        val: "",
        filtered_song: [],
        filtered_artist: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.findArtistId = this.findArtistId.bind(this);
    this.findSongId = this.findSongId.bind(this);
  }


  componentDidMount() {
    this.props.fetchArtists();
    this.props.fetchSongs();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        filtered_artist: nextProps.artists,
        filtered_song: nextProps.songs
    });
    }

    findArtistId(artist) {
        return this.props.artist_list.filter(el => el.name == artist)[0];
    }

    findSongId(song) {
       return this.props.songs_list.filter(el => el.title == song)[0];
    }



  handleChange(event) {
    this.setState({ val: event.target.value });  
    let currentArtistList = [];
    let newArtistList = [];
    let currentSongList = [];
    let newSongList = [];
    if (this.state.val !== "") {
        currentArtistList = this.props.artists;
        currentSongList = this.props.songs;
        newArtistList = currentArtistList.filter((artist) => {
            const lc = artist.toLowerCase();
            const filter = this.state.val.toLowerCase();
            return lc.includes(filter);
         });
        newSongList = currentSongList.filter((song) => {
            const lc = song.toLowerCase();
            const filter = this.state.val.toLowerCase();
            return lc.includes(filter);
         });
        } else {
            newSongList = this.props.songs;
            newArtistList = this.props.artists;
        }
        this.setState({
            filtered_artist: newArtistList,
            filtered_song: newSongList
        });
    }

  render() {

    if (!this.props.artists) {
        return null;
    }

    if (!this.props.songs) {
        return null;
    }

    
    if (!this.props.songs_list) {
        return null;
    }

    if (!this.props.artist_list) {
        return null;
    }

    // Find the id ... 
    const filteredArtists = this.state.filtered_artist.map((item, index) => {
           let artist = this.findArtistId(item);
           return (
                    index < 4 ? (<li className="filtered" key={item}><img className="search-img-artist" src={artist.photo}></img><Link to={`/artists/${artist.id}`}>{item}</Link></li>) : " "      
                )});

    const filteredSongs = this.state.filtered_song.map((item, index) => {
                // want to find song id 
                let song = this.findSongId(item);
                return (
                        index < 4 ? (<li className="filtered" key={item}><img className="search-img" src={song.photo}></img><Link to={`/songs/${song.id}`}>{item}</Link></li>) : " " 
                        
                )});

    let h1filteredSongs = filteredSongs.length > 0 ?  <h1 className="search-info"> Songs </h1> : " ";
    let h1filteredArtists = filteredArtists.length > 0 ?  <h1 className="search-info"> Artists </h1> : " ";
    let search = " ";
    if (this.state.val != 0) {
        search = <ul className="search">
           <h1 className="search-header"> Search Results </h1>
           {h1filteredSongs}
           {filteredSongs}
           {h1filteredArtists}
           {filteredArtists}
         </ul>;
    }
    return (
      <>
        <input
          onChange={this.handleChange}
          value={this.state.val}
          type="text"
          placeholder="Search Lyrics & More"
        />
        {search}
      </>
    );
  }
}

export default SearchBar;