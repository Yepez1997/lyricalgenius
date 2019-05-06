import React from 'react';
import ReactDOM from 'react-dom';
import ArtistContainer from './artist_container';

class ArtistIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchArtists();
    }

    render() {
        const artists = this.props.artists.map((artist, index) => {
            return (
                <li key={artist.id}> {artist.name} </li>
            );
        });
        return(
            <div className="artists">
                <ul>    
                    {artists}
                </ul>
            </div>
        );
    }
} 


export default ArtistIndex;