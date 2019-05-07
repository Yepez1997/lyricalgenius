import * as AnnotationsAPIUtil from '../util/annotations_api_util';

export const RECEIVE_ANNOTATION = "RECEIVE_ANNOTATION";
export const RECEIVE_ANNOTATIONS = "RECEIVE_ANNOTATIONS";

export const receiveAnnotation = (annotation) => ({
    type: RECEIVE_ANNOTATION,
    annotation
});

export const receiveAnnotations = (annotations) => ({
    type: RECEIVE_ANNOTATIONS,
    annotations
})

export const fetchAnnotations = () => (dispatch) => (
    AnnotationsAPIUtil.fetchAnnotations().then(
        payload => dispatch(receiveAnnotations(payload)))
);

export const fetchAnnotation = (id) => (dispatch) => (
    AnnotationsAPIUtil.fetchAnnotation(id).then(
        payload => dispatch(receiveAnnotation(payload)))
);

export const createAnnotation = (annotation) => dispatch => (
    AnnotationsAPIUtil.createAnnotation(annotation).then(
        payload => dispatch(receiveAnnotation(payload)))
);

