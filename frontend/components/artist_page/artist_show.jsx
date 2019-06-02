import React from "react";
import AristLetterShow from './artist_letter_show';
import RegularArtistShow from './regular_artist_show';

class ArtistShow extends React.Component {
    constructor(props) {
        super(props)
        // have a state with a letter 
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
            return <AristLetterShow artists={this.state.letter}/>
        } else {
            return <RegularArtistShow artists={this.props.artist}/>
        }
    }
}

export default ArtistShow;