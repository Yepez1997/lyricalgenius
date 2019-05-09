import React from 'react';


class ArtistShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId);

    }


    render() {
        if (!this.props.artist) {
            return null;
        }

        return (
            <h1> HEREEEE </h1>
        )
    }
}

export default ArtistShow;