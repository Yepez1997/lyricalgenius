import React from 'react';


class LyricRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false

        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        }, () => {
            this.state.clicked ? this.props.receiveLink(this.props.index) : this.props.removeLink(this.props.index);
        })
    }

    render() {
        let buttonClass = this.state.clicked ? "yellowButton" :  "";
        // from here should be able to render another link
        return (
            <>
            <button className={buttonClass} onClick={this.handleClick}> {this.props.lyrics} </button>
            <br></br>
            </>
        );
    }
}


export default LyricRow;
