//TODO: create a createLink method as a util method that makes a request to the data base 
import * as LinkAPIUtil from '../util/links_api_util';
export const RECEIVE_LINKS = "RECEIVE_LINKS";
export const RECEIVE_LINK = "RECEIVE_LINK";
export const REMOVE_LINK = "REMOVE_LINK";

export const receiveLinks = (links) => ({
    type: RECEIVE_LINKS,
    links 
});

export const receiveLink = (link) => ({
    type: RECEIVE_LINK,
    link
});


export const removeLink = (link_id) => ({
    type: REMOVE_LINK,
    link_id
})
export const createLink = (link) => dispatch => (
    LinkAPIUtil.createLink(link).then((link) => dispatch(receiveLink(link)))
);


