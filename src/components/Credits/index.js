import React from 'react';

import './style.scss';

const Credits = () => (
  <div className="row paragraph transition">
    <div className="content-width">
      <div className="credits">
        <div className="credit-listing">
          <strong>Produced by</strong>
          <span className="credit-name">Telegraph Spark</span>
        </div>

        <div className="credit-listing">
          <strong>Words</strong>
          <span className="credit-name">Rob Waugh</span>
          <strong>Commissioning Editor</strong>
          <span className="credit-name">Rachael Adams</span>
        </div>

        <div className="credit-listing">
          <strong>Sub-editor</strong>
          <span className="credit-name">Richard Dixon</span>

          <strong>Lead Designer</strong>
          <span className="credit-name">Betty Guerra</span>
        </div>

        <div className="credit-listing">
          <strong>Digital Developer</strong>
          <span className="credit-name">Alex Hooper</span>

          <strong>Picture Editor</strong>
          <span className="credit-name">Alice Griffiths</span>
        </div>

        <div className="credit-listing">
          <strong>Project Manager</strong>
          <span className="credit-name">Ellie Evans</span>
        </div>

      </div>
    </div>
  </div>
);

export default Credits;
