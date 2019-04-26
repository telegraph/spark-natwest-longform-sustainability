import React from 'react';

import './style.scss';

const Header = () => (
  <div className="header">
    <div className="header-bar">

      <a href="https://www.telegraph.co.uk/" className="desktop-only">
        <img className="the-logo" src="../assets/telegraph-logo.svg" alt="The Telegraph" />
      </a>

      <a href="https://www.telegraph.co.uk/" className="mobile-only">
        <img className="the-logo-mobile" src="../assets/telegraph_diamond_black.svg" alt="The Telegraph" />
      </a>

      <div className="btyb-wrapper">
        <span className="btyb">Brought to you by</span>
        <a rel="nofollow" href="https://flights.etihad.com/en/dct-abudhabi-uk" target="_blank">
          <img className="btyb-btn primary" src="../assets/logos/etihad_small_logo.svg" />
          <img className="btyb-btn secondary" src="../assets/logos/abu_dhabi_logo.svg" />
        </a>
      </div>
    </div>
  </div>
);

export default Header;
