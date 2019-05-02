import React, { useState, useEffect, useRef } from 'react';

import './style.scss';

function Timeline(props) {
  const [distanceScrolled, updateDistanceScrolled] = useState(0);
  const [fixed, updateFixed] = useState(false);
  const [btm, updateBtm] = useState(false);

  const timeLine = useRef(null);
  const timelineTitle = useRef(null);

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      const height = timeLine.current.clientHeight;
      const bb = timeLine.current.getBoundingClientRect();
      updateDistanceScrolled(-bb.top);

      const timeLineBB = timeLine.current.getBoundingClientRect();
      const timeLineTitleBB = timelineTitle.current.getBoundingClientRect();

      const btmLocked = distanceScrolled + window.innerHeight > height;
      updateBtm(btmLocked);
  
      if ((timeLineTitleBB.top < 110 && !fixed) && (timeLineBB.bottom - window.innerHeight > 0)) {
        updateFixed(true);
        console.log('setting fixed');
      } else if ((timeLineBB.bottom - window.innerHeight < 0 && fixed) || timeLineBB.top > 110) {
        updateFixed(false);
        console.log('not fixed');
      }
    });
  };

  const computedHeight = () => `${props.items.length * 100}vh`;

  useEffect(() => {
    // On mount
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    }
  });


  return (

    <div className="scrollGallery" ref={timeLine} style={{height: `${computedHeight}`}}>
      <h3 className={`scrollGallery__title ${fixed ? 'fixed' : ''}`} ref={timelineTitle}>
        {props.title}
      </h3>
      {props.items.map((item, i) => {
        return (
          <div className={`slides ${btm ? 'bottom': ''}`}>
            <div className="text-box">
            <img className="image" src={item.img} />
              <h4 className={`${btm && i < props.items.length - 1 ? 'hidden' : ''}`}>
                {item.date}
              </h4>
              <p>{item.copy}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
