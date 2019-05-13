import React from 'react';

import makeVisible from '../../hooks/makeVisible';

import './style.scss';


function Title(props) {
  const [title, isVisible] = makeVisible();

  return (
    <div className="title" style={{ opacity: `${isVisible ? '1' : '0'}`, transform: `translateX(${isVisible ? '0%' : '-20%'})` }} ref={title} >
      <h2 className="title__content">
        { props.copy }
      </h2>
      <img src={props.img} alt={props.copy} />
    </div>
  );
}

export default Title;
