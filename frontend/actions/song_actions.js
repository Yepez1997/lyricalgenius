import * as SongsAPIUtil from "../util/song_api_util";

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";


export const receiveSongs = (songs) => ({
    type: RECEIVE_SONGS,
    songs
});


export const receiveSong = (song) => ({
    type: RECEIVE_SONG,
    song
});


export const fetchSongs = () => (dispatch) => (
    SongsAPIUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)))
);


export const fetchSong = (id) => (dispatch) => (
    SongsAPIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
);




