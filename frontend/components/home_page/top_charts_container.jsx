import React from 'react'; 
import TopCharts from "./top_charts";
import { connect } from 'react-redux';
import { fetchSongs } from "../../actions/song_actions"

// the objects im passisng in are arrays convert to pojos 
const mapStateToProps = (state) => ({
    songs:  Object.keys(state.entities.songs).map(id => state.entities.songs[id])
});

const mapDispatchToProps = (dispatch) => ({
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopCharts);