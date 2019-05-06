import React from 'react';


class AnnotationForm extends React.Component {
    constructor(props) {
        super (props);
        this.state = this.props.annotation;
    }


    render() {
        // FIXME: add onchange handlers 
        return(

            <div className="form">
                <div className="form-body">
                    <textarea 
                    rows="10"
                    name="text area"
                    placeholder=" Don't just put the lyric in your own words -- drop some knowledge "> </textarea>
                </div>
                <div className="form-button">
                    <button className="save"> Save (+15 IQ)</button>
                    <button className="cancel"> Cancel </button>
                </div>
            </div>
        );

    };

}

export default AnnotationForm;