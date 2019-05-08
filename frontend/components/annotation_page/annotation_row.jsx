import React from 'react';

class AnnotationRow extends React.Component {

    render () {
        return (
            <div className="annotation-body">
                <p> {this.props.row} </p>
            </div>
        );
    }
}

export default AnnotationRow;