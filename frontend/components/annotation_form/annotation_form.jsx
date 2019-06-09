import React from 'react';


class AnnotationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      song_id: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  componentDidMount() {
    if (this.props.match.path.includes("annotations")) {
        this.props
          .fetchAnnotation(
            this.props.match.params.annotationId
          )
          .then(() => {
            this.setState({
              song_id: this.props.currAnnotation[0].song_id
            });
          });
    } else {
        this.setState({
          song_id: parseInt(this.props.match.params.songId)
        });
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleCancel() {
    this.props.removeLinks();
    this.props.history.push(`/songs/${this.state.song_id}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createLink, links } = this.props;
    this.props.createAnnotation(this.state).then(annotation => {
      links.forEach(link_id => {
        createLink({
          link: link_id,
          annotation_id: annotation.annotation.annotation_id
        });
      });
      this.props.history.push(
        `/annotations/${annotation.annotation.annotation_id}`
      );
    });
    this.setState({
      body: "",
      song_id: this.props.currAnnotation[0].song_id
    });
  }

  render() {
    if (!this.props.currAnnotation) {
      return;
    }
    return (
      <div className="form">
        <div className="form-body">
          <textarea
            onChange={this.update("body")}
            value={this.state.body}
            rows="10"
            name="text area"
            placeholder=" Don't just put the lyric in your own words -- drop some knowledge "
          >
            {" "}
          </textarea>
        </div>
        <div className="form-button">
          <button onClick={this.handleSubmit} className="save">
            {" "}
            Save (+15 IQ)
          </button>
          <button onClick={this.handleCancel} className="cancel">
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default AnnotationForm;