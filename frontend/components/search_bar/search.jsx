import React from 'react';

//TODO: REPLACE WITH INPUT IN HEADER MAIN NAV
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            value: "",
            artists: this.props.artists,
            songs: this.props.songs,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchSongs;
        this.props.fetchArtists;
        debugger 
    }

 
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    

    render() {
        return (
            <input onChange={this.handleChange} 
            type="text" 
            value={this.state.value} 
            placeholder="Search Lyrics & More" />
       );
    }
}

export default Search;