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
      <TopChartsContainer />
      <ArtistsFooterNav />
    </header>
  </div>
);

export default HomePage;