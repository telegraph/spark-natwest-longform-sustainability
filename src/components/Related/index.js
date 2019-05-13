import React from 'react';

import './style.scss';

const Related = () => (
  <div className="related-wrap">
    <h3>Related content</h3>
    <div className="related">
      <div className="block">
        <a>
          <div className="thumbnail t1" />
        </a>
        <a>
          <span className="description">The importance of cash-flow to an SME</span>
        </a>
      </div>
      <div className="block">
        <a>
          <div className="thumbnail t2" />
        </a>
        <a>
          <span className="description">A day in the life of food entrepeneur Ella Mills</span>
        </a>
      </div>
      <div className="block">
        <a>
          <div className="thumbnail t3" />
        </a>
        <a>
          <span className="description">How to win at business? Ask the Queen of Shops</span>
        </a>
      </div>
    </div>
  </div>
);
export default Related;
