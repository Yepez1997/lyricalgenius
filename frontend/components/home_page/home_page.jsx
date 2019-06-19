import React from 'react';
import HeaderMainNavContainter from "./header_main_nav_container";
import HeaderInfoNav from "./header_info_nav";
import ArtistsFooterNav from "./artists_footer_nav";
import TopChartsContainer from "./top_charts_container";
import Modal from "../modal/modal";

const HomePage = () => (
  <div>
    <Modal />
    <header>
      <HeaderMainNavContainter />
      <HeaderInfoNav />
      <div className="header-news">
        <div className="header-news-title">
          <div className="news-bar">
            <span> News </span>
          </div>
          <h2>
            Roc Nation CEO Calls For An End To Album Bundles & Says ‘Billboard’
            Is Trying To “Blunt Streaming’s Momentum
          </h2>
          <h1> TEXT </h1>
        </div>
        <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F03%2Fdj-khaled-father-of-asahd-video-letter-0.jpg?w=960&cbr=1&q=90&fit=max" />
      </div>
      <TopChartsContainer />
      <ArtistsFooterNav />
    </header>
  </div>
);

export default HomePage;