import merge from "lodash/merge";
import { RECEIVE_LINKS } from "../actions/links_actions";
import { RECEIVE_LINK } from "../actions/links_actions";

// may also want to have a remove links 
const linksReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LINKS:
            return merge({}, state, action.links);
        case RECEIVE_LINK: 
            return merge({}, state, {[action.link] : action.link});
        default: 
            return state;
    }
};

export default linksReducer; 