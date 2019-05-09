import React, { useState, useEffect, useRef } from 'react';
import Bubble from './subcomponents/Bubble';

import { verticalSlider } from "../../data";

import './style.scss';

function VerticalSlider() {
  const [data, setData] = useState([]);
  const [scrolled, setScrolled] = useState(0);
  const [height, setHeight] = useState(0);
  const bubbleSlider = useRef(null);

  const grabData = () => {
    setData(verticalSlider);
  };

  const getHeight = () => {
    const ConHeight = bubbleSlider.current.getBoundingClientRect().height;
    if (ConHeight != null) {
      setHeight(ConHeight);
    }
  };

  const amountScrolled = () => {
    // get amount of slider scrolled
    const value = bubbleSlider.current.getBoundingClientRect().top - window.innerHeight;
    setScrolled(-value);
  };

  useEffect(() => {
    // On mount
    grabData();
    getHeight();
  }, []);

  useEffect(() => {
    // on update
    window.addEventListener('scroll', amountScrolled);
    return function cleanup() {
      window.removeEventListener('scroll', amountScrolled);
    };
  });

  return (
    <div className="vertical-slider" ref={bubbleSlider}>
      <h2 className="vertical-slider__title">Sustainability in numbers</h2>
      <div className="vertical-slider__container">
        {data.map((item, i) => {
          return (
            <Bubble right={item.coordRight} top={item.coordTop} title={item.stat} copy={item.copy} scrolled={scrolled} ConHeight={height} />
          );
        })}
      </div>
    </div>
  );
}

export default VerticalSlider;
