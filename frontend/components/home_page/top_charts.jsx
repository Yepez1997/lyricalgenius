import React from 'react';

/* Renders the Top Charts Section */
// Test with LI's 
class TopCharts extends React.Component { 
    constructor(props) {
        super(props);
    }


    render() {
        //TODO: INJECT ALL DATA FROM DATABASE HERE 
        return (
          <div className="songInfo-box">
            <ul className="songInfo">
              <li className="songInfo-number"> 1 </li>
              <li className="songInfo-image"> Dummy-Info </li>
              <li className="songInfo-name"> Title </li>
            </ul>
            <ul className="songInfo">
              <li className="songInfo-number"> 2 </li>
              <li className="songInfo-image"> Dummy-Info </li>
              <li className="songInfo-name"> Title </li>
            </ul>
            <ul className="songInfo">
              <li className="songInfo-number"> 3 </li>
              <li className="songInfo-image"> Dummy-Info </li>
              <li className="songInfo-name"> Title </li>
            </ul>
            <ul className="songInfo">
              <li className="songInfo-number"> 4 </li>
              <li className="songInfo-image"> Dummy-Info </li>
              <li className="songInfo-name"> Title </li>
            </ul>
            <ul className="songInfo">
              <li className="songInfo-number"> 5 </li>
              <li className="songInfo-image"> Dummy-Info </li>
              <li className="songInfo-name"> Title </li>
            </ul>
            <ul className="songInfo">
              <li className="songInfo-number"> 6 </li>
              <li className="songInfo-image"> Dummy-Info </li>
              <li className="songInfo-name"> Title </li>
            </ul>
          </div>
        );
    }
}

export default TopCharts;