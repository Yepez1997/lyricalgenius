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

        // if (isNaN(parseInt(this.props.match.params.artistId))) {
        //     return <AristLetterContainer />
        // } else {
        //     return <RegularArtistShow />
        // }
        return (
            <h1> HEREEEE </h1>
        )
    }
}

export default ArtistShow;