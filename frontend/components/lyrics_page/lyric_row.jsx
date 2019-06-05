import React from 'react';
import {Link} from 'react-router-dom';


class LyricRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      link: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

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

  render() {
    let buttonClass = this.state.clicked ? "yellowButton" : "";
    let isLink = false;
    let annotation_id;
    for (let i = 0; i < this.props.annotations.length; i++) {
        let curr_annotation_id = this.props.annotations[i].annotation;
        let links_len = this.props.annotations[i].links.length;
        for (let j = 0; j < links_len; j++) {
            if (parseInt(this.props.annotations[i].links[j].link) === parseInt(this.props.index)) {
                annotation_id = curr_annotation_id;
                isLink = true;
                break;
            }
        }   

        if (annotation_id) break;
    }


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
