import React, {useEffect, useState, useRef } from 'react';

import makeVisible from '../../helpers/helpers';

import Title from '../Title';

import './style.scss';

function Pagebody(props) {
  const [isVisible, setVisibility] = useState(0);
  const bodyContent = useRef(null);

  useEffect(() => {
    // on Mount, apply helper
    makeVisible(isVisible, setVisibility, bodyContent);
  });

  return (
    <div className="pagebody">
      {props.title ? <Title copy={props.title} /> : ''}
      <div className={`pagebody__content ${props.title ? '' : 'pagebody__content--notitle'}`} ref={bodyContent} style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translateY(${isVisible ? '0' : '-20'})` }}>
        {props.children}
      </div>
    </div>
  );
}

export default Pagebody;
