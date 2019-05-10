import React, { useState, useEffect, useRef } from 'react';

import { officeSlider } from '../../data';

import officeSliderCube from '../../assets/office-slider-cube.svg';

import './style.scss';

function Slider() {
  const [items, setItems] = useState([]);
  const [currentItem, changeCurrentItem] = useState(0);
  const [itemProgress, changeItemProgress] = useState(0);

  const points = useRef(null);

  function calcItemProgress() {
    // works out gap between each point
    const changeValue = 100 / items.length;
    // * the current item by the gap distance
    const calcProgress = currentItem * changeValue;
    // set it as state
    changeItemProgress(calcProgress);
  }

  useEffect(() => {
    // on Mount
    setItems(officeSlider);
  }, []);

  useEffect(() => {
    // On currentItem update
    calcItemProgress();
  }, [currentItem]);

  function changeItem(index, e) {
    changeCurrentItem(index);
  }

  return (
    <div className="slider">
      <h2 className="slider__title">
        The sustainable office
      </h2>
      <div className="slider__bg" />
      <div className="slider__container">
        {items.map((item, i) => (
          <div
            className={`container__item ${currentItem === i ? 'visible' : ''}`}
          >
            {item.copy}
          </div>
        ))}
      </div>
      <div className="slider__progress">
        <div className="progress-points" ref={points}>
          {items.map((item, i) => {
            return (
              <div
                className={`progress-point ${
                  currentItem === i ? 'active' : ''
                }`}
                onClick={(e) => changeItem(i, e)}
              />
            );
          })}
        </div>
        <div className="progress-line">
          <div className="line-marker" style={{ left: `${itemProgress}%` }}>
            <img src={officeSliderCube} />
          </div>

          {new Array(17).fill().map((_, i) => (
            <div
              className="progress-marker"
              style={{ left: `calc(${100 / 16 * i}%)` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Slider;
