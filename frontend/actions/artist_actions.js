import * as ArtistAPIUtil from '../util/artist_api_util'; 

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIEVE_ARTISTS";

export const receiveArtists = (artists) => ({
    type: RECEIVE_ARTISTS,
    artists
});

export const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
});

export const fetchArtists = () => (dispatch) => (
    ArtistAPIUtil.fetchArtists().then( 
        payload => dispatch(receiveArtists(payload)))
)


export const fetchArtist = (id) => (dispatch) => (
    ArtistAPIUtil.fetchArtist(id).then(
        payload => dispatch(receiveArtists(payload)))
)

