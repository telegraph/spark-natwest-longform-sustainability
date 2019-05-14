import React from 'react';

import makeVisible from '../../hooks/makeVisible';

import Title from '../Title';

import './style.scss';

function Pagebody(props) {
  const [bodyContent, isVisible] = makeVisible();

  return (
    <div className={`pagebody ${!props.title ? 'pagebody--notitle' : ''}`}>
      {props.title ? <Title copy={props.title} img={props.img} /> : ''}
      <div className={`pagebody__content ${props.title ? '' : 'pagebody__content--notitle'}`} ref={bodyContent} style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translateY(${isVisible ? '0' : '-20'})` }}>
        {props.children}
      </div>
    </div>
  );
}

export default Pagebody;
