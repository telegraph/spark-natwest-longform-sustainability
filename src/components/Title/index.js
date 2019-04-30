import React, { useState, useRef, useEffect } from 'react';
import makeVisible from '../../helpers/helpers';

import './style.scss';


function Title(props) {
  const [isVisible, setVisibility] = useState(0);
  const title = useRef(null);

  useEffect(() => {
    // on Mount, apply helper
    makeVisible(isVisible, setVisibility, title);
  });

  return (
    <h2 className="title" ref={title} style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translateX(${isVisible ? '0%' : '-20%'})` }}>
      { props.copy }
    </h2>
  );
}

export default Title;
