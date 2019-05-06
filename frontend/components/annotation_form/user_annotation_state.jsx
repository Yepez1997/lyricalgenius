import React from 'react';
import AnnotationFormContainer from './annotation_form_container';


const UserAnnotationState = (props) => {
    const annotationLinks = () => (
        <>
        <AnnotationFormContainer/>
        </>
    );

    const signInRequiredToAnnotate = () => (
        <button> Please Sign In !!! </button>
    );
    debugger 
    return props.currentUser ? annotationLinks() : signInRequiredToAnnotate();
};

export default UserAnnotationState;