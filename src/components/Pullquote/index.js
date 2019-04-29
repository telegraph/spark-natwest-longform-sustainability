import React from 'react';

import './style.scss';

const Pullquote = props => (
  <div className={`pullquote ${props.quote ? 'pullquote--withquote' : ''} ${props.specialQuote ? 'pullquote--special' : ''}`}>
    {props.children}
  </div>
);

export default Pullquote;
