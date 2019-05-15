import React, { useState, useEffect, useRef } from 'react';
import Bubble from './subcomponents/Bubble';
import BackgroundBubble from './subcomponents/BackgroundBubble';

import { verticalSlider } from '../../data';

import './style.scss';


function VerticalSlider() {
  const [data, setData] = useState([]);
  const [scrolled, setScrolled] = useState(0);
  const [conDimensions, setContainerDimensions] = useState(0);
  const bubbleSlider = useRef(null);
  const [fixed, updateFixed] = useState(false);

  const bubbleTitle = useRef(null);

  const handleScroll = () => {
    window.requestAnimationFrame(() => {
      const timeLineBB = bubbleSlider.current.getBoundingClientRect();
      const timeLineTitleBB = bubbleTitle.current.getBoundingClientRect();

      if ((timeLineTitleBB.top < 110 && !fixed) && (timeLineBB.bottom - window.innerHeight > 0)) {
        updateFixed(true);
        console.log('setting fixed');
      } else if ((timeLineBB.bottom - window.innerHeight < 0 && fixed) || timeLineBB.top > 110) {
        console.log(timeLineBB);
        updateFixed(false);
        console.log('not fixed');
      }
    });
  };

  const grabData = () => {
    setData(verticalSlider);
  };

  const amountScrolledandHeight = () => {
    handleScroll();
    // get amount of slider scrolled
    const value = bubbleSlider.current.getBoundingClientRect().top - window.innerHeight;
    setScrolled(-value);

    const ConHeight = bubbleSlider.current.getBoundingClientRect();
    if (ConHeight != null) {
      setContainerDimensions(ConHeight);
    }
  };

  useEffect(() => {
    // On mount
    grabData();
  }, []);

  useEffect(() => {
    // on update
    window.addEventListener('scroll', amountScrolledandHeight);
    return function cleanup() {
      window.removeEventListener('scroll', amountScrolledandHeight);
    };
  });

  return (
    <div className="vertical-slider" ref={bubbleSlider}>
      <h2 className={`vertical-slider__title ${fixed ? 'fixed' : ''}`} ref={bubbleTitle}>Sustainability in numbers</h2>
      <div id="parallax-container">
        <BackgroundBubble pos={{ top: '10%', left: '1vw' }} speed={200} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '30%', left: '20vw' }} speed={80} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '40%', left: '50vw' }} speed={30} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '50%', left: '10vw' }} speed={100} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '60%', left: '30vw' }} speed={100} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '70%', left: '50vw' }} speed={100} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '80%', left: '65vw' }} speed={100} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '90%', left: '45vw' }} speed={100} conDimen={conDimensions} />
      </div>
      <div className="vertical-slider__container">
        {data.map((item) => {
          return (
            <Bubble right={item.coordRight} top={item.coordTop} title={item.stat} copy={item.copy} scrolled={scrolled} conDimen={conDimensions} />
          );
        })}
      </div>
    </div>
  );
}

export default VerticalSlider;
