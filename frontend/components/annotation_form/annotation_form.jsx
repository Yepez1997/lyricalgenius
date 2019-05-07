import React from 'react';


class AnnotationForm extends React.Component {
    constructor(props) {
        super (props);
        this.state = {body: "", 
        song_id: parseInt(this.props.match.params.songId)};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createLinks = this.createLinks.bind(this);
    }
    
    update(field) {
        return (e) => {
        this.setState({[field]: e.currentTarget.value})
        }
    }

    // now want to dispatch tthe links to create the link 
    // after wn
    updateSongId() {
       // debugger 
        this.setState({
            song_id: this.props.match.params.songId}
        );
    }

    // create links should take in an annotation pojo
    createLinks(annotation) {

    }

    handleSubmit(e) {
        this.updateSongId();
        e.preventDefault();
      // TODO -> should dispatch and create a state 
        // submit to the db 
        // want to have a seperate pojo for the links 

        // should return pojo with the new id =>
        // disptach the idk wiht the annotation
        // take a look at this function 
        // FIXME: LOOK OVER THIS !!! !!
        // let {links} = this.props;
        const {createLink, links} = this.props;
        this.props.createAnnotation(this.state).then(annotation => {
            // Object.values(this.props.links);
            debugger; 
            links.forEach(link_id => {
                // no sesnse of this 
                // grabbing the right data ?
                // is this defiend ?
                createLink({
                  link: link_id,
                  annotation_id: annotation.annotation.annotation_id
                });
            });
        });
        // reset the state
        this.setState({
          body: "",
          song_id: parseInt(this.props.match.params.songId)
        });
    }

    render() {
    
        // FIXME: add onchange handlers to cancel 
        return(
            <div className="form">
                <div className="form-body">
                    <textarea onChange={this.update('body')}
                    value={this.state.body}
                    rows="10"
                    name="text area"
                    placeholder=" Don't just put the lyric in your own words -- drop some knowledge "> </textarea>
                </div>
                <div className="form-button">
                    <button onClick={this.handleSubmit}className="save"> Save (+15 IQ)</button>
                    <button className="cancel"> Cancel </button>
                </div>
            </div>
        );

    };

}

export default AnnotationForm;