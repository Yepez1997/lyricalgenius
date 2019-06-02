import React from "react";
import AristLetterShow from './artist_letter_show';
import RegularArtistShow from './regular_artist_show';
import ArtistLetterShowContainer from './artist_letter_show_container';

class ArtistShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            letter: ""
        }
    }

    componentDidMount() {
        if (!isNaN(parseInt(this.props.match.params.artistId))) {
            this.props.fetchArtist(this.props.match.params.artistId);
        } else {
            this.setState({
                letter: this.props.match.params.artistId
            })
        }
    }

    render() {
        let isArtistLetter;
        if (this.state.letter !== "") {
            isArtistLetter = true
        } else {
            isArtistLetter = false; 
            if (!this.props.artist) {
                return null;
            }
        }
        if (isArtistLetter) {
            //return <AristLetterShow letter={this.state.letter}/>
            return <ArtistLetterShowContainer letter={this.state.letter}/>
        } else {
            return <RegularArtistShow artists={this.props.artist}/>
        }
    }
}

export default ArtistShow;