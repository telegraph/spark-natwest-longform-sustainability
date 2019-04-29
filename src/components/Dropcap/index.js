import React from 'react';

import './style.scss';

const Dropcap = props => (
  <div className="dropcap">
    <span className="face top" />
    <span className="face left" />
    <span className="face right">
      <p className="dropcap__letter">
        {props.children}
      </p>
    </span>
  </div>
);

export default Dropcap;
