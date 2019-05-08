import React from 'react';

import ReactDOM from "react-dom";
import HeaderMainNavContainer from "../home_page/header_main_nav_container";
import HeaderInfoNav from "../home_page/header_info_nav";
import Modal from "../modal/modal";
// import AnnotationFormContainer from '../annotation_form/annotation_form_container';
import UserAnnotationContainer from "../annotation_form/user_annotation_state_container";
import LyricRow from "../lyrics_page/lyric_row";

class Annotations extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAnnotation(this.props.match.params.annotationId);
        
        //this.props.fetchSong(this.props.annotation.song_id);
    }


    render() {
  
        return (
        <>
        <Modal/>
        <HeaderMainNavContainer />
        <HeaderInfoNav /> 
        </>
        );
    }
}


export default Annotations;