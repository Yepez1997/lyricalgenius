import React from 'react';


class AnnotationForm extends React.Component {
    constructor(props) {
        super (props);
        this.state = {body: "", 
        song_id: parseInt(this.props.match.params.songId)};
        this.handleSubmit = this.handleSubmit.bind(this);
        //handle cancel woudl remove all the links in the current page
        this.handleCancel = this.handleCancel.bind(this);

    }
    
    update(field) {
        return (e) => {
        this.setState({[field]: e.currentTarget.value})
        }
    }

    handleCancel() {
        this.props.removeLinks();
        this.props.history.push(`/songs/${this.state.song_id}`);

    }

    handleSubmit(e) {
        //this.updateSongId();
        e.preventDefault();
        const {createLink, links} = this.props;
        this.props.createAnnotation(this.state).then(annotation => {
            links.forEach(link_id => {
                createLink({
                  link: link_id,
                  annotation_id: annotation.annotation.annotation_id
                });
            });
            this.props.history.push(`/annotations/${annotation.annotation.annotation_id}`)
        });
        this.setState({
          body: "",
          song_id: parseInt(this.props.match.params.songId)
        });
    }

    render() {
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
                    <button onClick={this.handleCancel} className="cancel"> Cancel </button>
                </div>
            </div>
        );

    };

}

export default AnnotationForm;