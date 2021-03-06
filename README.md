# Lyrical Genius


Lyrical Genius is a clone of Genius.com - previously known as RapGenius.com. Users are able to highlight over selected lyrics, and add comments over the song lyric to add connotation to the lyric - in respect to the song. That being said, Lyrical Genius supports the current features: Song annotations, a Lyrics Page, a Search Bar, and a Artist's Page. These features are amongst Genius.com's most popular features. 

Within a two week time frame a lot of tasks were accomplished - such include the features mentioed above. Note inorder to start annotating, you must be signed in !


## Features
Lyrical Genius supports the current features 
  * Search 
    - A User (signed in or not) is able to search any song or artist in the current database
  * Song Annotations
    - Signed in users are able to make annotations on a song
  * Lyrics Page
    - The proper lyrics for a song are displayed and rendered into rows of Components
  * Artists Page 
    - Shows an artist's most popular songs 
  * All Artists Page
    - Renders all artists
    
## Code Snippets (Search)
Life cycle methods in Search. ComponentDidMount() is critical to retrieve all the songs and artists to filter through.  ComponentWillReceiveProps(nextProps) was neccesary in order to update the state - based on the props given.
```
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
```

Handled all the changes for the filtered songs. 
```
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

```

Rendered specific songs or artists with search ! Could have rendered one or the other, but I had to make sure either a artist's or a song's search label would be null in the drop down before rendering the search bar.  
```
     const filteredArtists = this.state.filtered_artist.map((item, index) => {
           let artist = this.findArtistId(item);
           return (
                    index < 4 ? (<li className="filtered" key={item}><img className="search-img-artist" src={artist.photo}></img><Link to={`/artists/${artist.id}`}>{item}</Link></li>) : " "      
                )});

    const filteredSongs = this.state.filtered_song.map((item, index) => {
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
```


## Core Functionality (In Depth)
 ### HomePage
![Home Page](https://github.com/Yepez1997/lyricalgenius/blob/master/embeded_images/Screen%20Shot%202019-05-10%20at%209.51.08%20AM.png)
### Search Bar
![Search Bar](https://github.com/Yepez1997/lyricalgenius/blob/master/embeded_images/Screen%20Shot%202019-05-10%20at%209.51.23%20AM.png)
### Lyrics Page
![Lyrics Page](https://github.com/Yepez1997/lyricalgenius/blob/master/embeded_images/Screen%20Shot%202019-05-10%20at%2011.15.36%20AM.png)
### Artist Page
![Artists Page](https://github.com/Yepez1997/lyricalgenius/blob/master/embeded_images/Screen%20Shot%202019-06-03%20at%2011.45.53%20AM.png)
### All Artists Page
![All Artists Page](https://github.com/Yepez1997/lyricalgenius/blob/master/embeded_images/artists-page.png)
### All Songs Page
![All Songs Page](https://github.com/Yepez1997/lyricalgenius/blob/master/embeded_images/all-songs.png)

## Technologies 
Lyrical Genius was built with the following technologies: React JS (frontend), Ruby on Rails (backend), Postgres (backend database), and Amazon Web Services (image storage), 
