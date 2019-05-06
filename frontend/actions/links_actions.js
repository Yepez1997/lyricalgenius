//TODO: create a createLink method as a util method that makes a request to the data base 
export const RECEIVE_LINKS = "RECEIVE_LINKS";
export const RECEIVE_LINK = "RECEIVE_LINK";

export const receiveLinks = (links) => ({
    type: RECEIVE_LINKS,
    links 
});

export const receiveLink = (link) => ({
    type: RECEIVE_LINK,
    link
});


