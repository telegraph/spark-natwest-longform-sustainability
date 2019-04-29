import React from 'react';

import Title from '../Title';

import './style.scss';

const Pagebody = props => (
  <div className="pagebody">
    {props.title ? <Title copy={props.title} /> : ''}
    <div className={`pagebody__content ${props.title ? '' : 'pagebody__content--notitle'}`}>
      {props.children}
    </div>
  </div>
);

export default Pagebody;
