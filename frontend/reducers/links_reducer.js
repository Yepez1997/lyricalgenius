import merge from "lodash/merge";
import { RECEIVE_LINK, REMOVE_LINK, RECEIVE_LINKS, REMOVE_LINKS } from "../actions/links_actions";


const linksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LINKS:
            return merge({}, state, action.links);
        case RECEIVE_LINK: 
            return merge({}, state, {[action.link] : action.link});
        case REMOVE_LINK:
            let newState = merge({}, state);
            delete newState[action.link_id];
            return newState;
        case REMOVE_LINKS:
            return merge({}, {});
        default: 
            return state;
    }
};

export default linksReducer; 