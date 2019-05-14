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
    const changeValue = 100 / (items.length - 1);
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

  function changeItem(index) {
    changeCurrentItem(index);
  }

  function prevItem() {
    let itemState = currentItem;
    changeCurrentItem(itemState - 1);
  }

  function nextItem() {
    let itemState = currentItem;
    changeCurrentItem(itemState + 1);
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
      <div className="slider__progress-mobile">
        <div className={`slider-cont slider-prev ${currentItem < 1 ? 'noclick' : ''}`} onClick={() => prevItem()} />
        <div className="slider-total">
          {`${currentItem + 1} of ${items.length}`}
        </div>
        <div className={`slider-cont slider-next ${currentItem >= 16 ? 'noclick' : ''}`} onClick={() => nextItem()} />
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
        </div>
      </div>
    </div>
  );
}
export default Slider;
