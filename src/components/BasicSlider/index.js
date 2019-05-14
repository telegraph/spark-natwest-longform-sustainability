import React, { useState, useEffect, useRef } from 'react';

import './style.scss';

import { basicSlider } from '../../data';

function BasicSlider() {
  const [currentSlide, changeCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  const [currentSlideHeight, setCurrentSlideHeight] = useState(0);

  const slide = useRef(null);

  const grabData = () => {
    setData(basicSlider);
  };

  const prevSlide = () => {
    changeCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    changeCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    grabData();
  }, []);

  return (
    <div className="basic-slider">
      <h2 className="basic-slider__title">
        Seven sustainable businesses setting the trend
      </h2>
      <div className="basic-slider__container" style={{height: `${currentSlideHeight}`}}>
        <div className="controls">
          <div
            className={`arrow left-arrow ${currentSlide <= 0 ? 'noclick' : ''}`}
            onClick={() => prevSlide()}
          />
          <div
            className={`arrow right-arrow ${
              currentSlide >= data.length - 1 ? 'noclick' : ''
            }`}
            onClick={() => nextSlide()}
          />
        </div>
        {data.map((item, i) => {
          return (
            <div
              className={`basic-slider__item ${
                currentSlide === i ? 'visible' : ''
              }`}
              ref={slide}
            >
              <div class="img-container">
                <img className="img-photo" src={item.img} />
                <img className="img-logo" src={item.logo} />
              </div>
              <p>{item.copy}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BasicSlider;
