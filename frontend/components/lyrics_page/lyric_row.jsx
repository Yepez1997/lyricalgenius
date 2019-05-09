import React from 'react';
import {Link} from 'react-router-dom';

// want to fetch the annoations 
class LyricRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      link: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // if its a do not want to set state of the button
  // want to detect first its a link
  // want to pass in the respective annot
  // getLinks = Object.keys(this.props.annotations).map(id => this.props.annotations[id].links
  //WANT TO HAVE A DIFFERENT CLICK HANDLER 
  handleClick() {
    this.setState(
      {
        clicked: !this.state.clicked
      },
      () => {
        this.state.clicked
          ? this.props.receiveLink(this.props.index)
          : this.props.removeLink(this.props.index);
      }
    );
  }

  // should have a link here to the annoataion page
  // need to get
  render() {
    let buttonClass = this.state.clicked ? "yellowButton" : "";
    // from here should be able to render another link
    // check if it is a link 
    let isLink = false;
    let annotation_id;
    for (let i = 0; i < this.props.annotations.length; i++) {
        let curr_annotation_id = this.props.annotations[i].annotation;
        // now look at links 
        let links_len = this.props.annotations[i].links.length;
        for (let j = 0; j < links_len; j++) {
            if (parseInt(this.props.annotations[i].links[j].link) === parseInt(this.props.index)) {
                annotation_id = curr_annotation_id;
                // change the state of this now that we found it exists in our list 
                isLink = true;
                break;
            }
        }   

        if (annotation_id) break;
    }

    // if isLink True 
    // want to Link path="/annoatations/annotation_id"
    let checkType = isLink ?  (
      <div className="fix-margins">
        <Link to={`/annotations/${annotation_id}`}>
          {this.props.lyrics}
        </Link>
      </div>
     ) : (
       <button className={buttonClass} onClick={this.handleClick}>{this.props.lyrics}
       </button>
     );

    let br = this.props.index % 7 === 0 ? <br></br> : " ";
    return (
      <>
        {checkType}
        <br />
        {br}
      </>
    );
  }
}


export default LyricRow;
