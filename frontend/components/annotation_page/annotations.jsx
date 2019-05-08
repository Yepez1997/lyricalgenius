import React from 'react';

import { fetchAnnotations } from '../../actions/annotation_actions';
//TODO: compile all preveious elements in a function and render them 


class Annotations extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAnnotation(this.props.match.params.annotationId);
    }


    render() {

        if (!this.props.annotation) {
            return null;
        }

        return (
            <>
            <h1> HERERRER  </h1>
            <h1> User {this.props.annotation.author} </h1>
            <h1> {this.props.annotation.body}</h1>
            </>
        );
    }
}


export default Annotations;