import React, { useState, useEffect, useRef } from "react";

import { officeSlider } from "../../data";

import officeImg from "../../assets/office.svg";

import "./style.scss";

function Slider() {
  const [items, setItems] = useState([]);
  const [currentItem, changeCurrentItem] = useState(0);
  const [itemProgress, changeItemProgress] = useState(0);

  const points = useRef(null);

  function calcItemProgress() {
    const progressWidth = points.current.offsetWidth;
    const changeValue = 100 / items.length;
    const calcProgress = currentItem * changeValue;
    changeItemProgress(calcProgress);
  }

  useEffect(() => {
    // on Mount
    setItems(officeSlider);
    console.log(points);
  }, []);

  useEffect(() => {
    // On currentItem update
    calcItemProgress();
  }, [currentItem]);

  function changeItem(index) {
    changeCurrentItem(index);
  }

  return (
    <div className="slider">
      <img className="slider__bg" src={officeImg} alt="An office" />
      <div className="slider__container">
        {items.map((item, i) => (
          <div
            className={`container__item ${currentItem === i ? "visible" : ""}`}
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
                  currentItem === i ? "active" : ""
                }`}
                onClick={() => changeItem(i)}
              />
            );
          })}
        </div>
        <div className="progress-line">
          <div className="line-marker" style={{ left: `${itemProgress}%` }}>
            O
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slider;
