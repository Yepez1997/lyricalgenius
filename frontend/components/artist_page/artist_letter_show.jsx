import React from 'react';
//import ReactDOM from 'react-dom';

// function ArtistLetterShow(props) {

//     return (
//         <h1> HERE </h1> 
//     )
// }

class ArtistLetterShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {filteredArtists: []}
        this.filterArtists = this.filterArtists.bind(this);
    }

    componentDidMount() {
        this.props.fetchArtists();
    }

    filterArtists(artists) {
        let filtered = [];
        //console.log(artists)
        if (!artists) {
            return null;
        }
        for (let i in artists) {
            if (artists[i].name.slice(0,1).toLowerCase() === this.props.letter.toLowerCase()) {
                filtered.push(artists[i]);
            }
        }
        return filtered; 
    }

    render() {
        if (!this.props.artists) {
            return null;
        }
        let filtered = this.filterArtists(this.props.artists);
        console.log(filtered)
        //this.setState({filteredArtists: filtered})
        // let allFilteredArtists = this.state.filteredArtists.map(artist => 
        //     (<li key={artist.id}> {artist.name} </li>)
        // )

        return (
            <h1>  here </h1>   
        )
    }
}

export default ArtistLetterShow;