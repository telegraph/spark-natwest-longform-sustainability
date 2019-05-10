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

  const grabData = () => {
    setData(verticalSlider);
  };

  const amountScrolledandHeight = () => {
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
      <h2 className="vertical-slider__title">Sustainability in numbers</h2>
      <div id="parallax-container">
        <BackgroundBubble pos={{ top: '10vh', left: '1vw' }} speed={200} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '50vh', left: '20vw' }} speed={80} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '90vh', left: '50vw' }} speed={30} conDimen={conDimensions} />
        <BackgroundBubble pos={{ top: '75vh', left: '75vw' }} speed={100} conDimen={conDimensions} />
      </div>
      <div className="vertical-slider__container">
        {data.map((item, i) => {
          return (
            <Bubble right={item.coordRight} top={item.coordTop} title={item.stat} copy={item.copy} scrolled={scrolled} conDimen={conDimensions} />
          );
        })}
      </div>
    </div>
  );
}

export default VerticalSlider;
