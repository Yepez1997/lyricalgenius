import merge from "lodash/merge";
import { RECEIVE_ANNOTATION, RECEIVE_ANNOTATIONS } from "../actions/annotation_actions";

const annotationsReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_ANNOTATIONS:
            return merge({}, state, action.annotations);
        case RECEIVE_ANNOTATION:
            return merge({}, state, {[action.annotation]: action.annotation});
        default: 
            return state;
    }
}

export default annotationsReducer;