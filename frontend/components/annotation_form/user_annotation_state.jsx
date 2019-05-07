import React from 'react';
import AnnotationFormContainer from './annotation_form_container';


const UserAnnotationState = (props) => {
    const annotationLinks = () => (
        props.links.length > 0 ?  <AnnotationFormContainer/>  : <h1> ... </h1>
    );

    const signInRequiredToAnnotate = () => (
        <button className="signup-annotate"> Sign Up To Start Annotating </button>
    );
    return props.currentUser ? annotationLinks() : signInRequiredToAnnotate();
};

export default UserAnnotationState;