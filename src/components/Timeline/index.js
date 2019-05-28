import React, { useState, useEffect, useRef } from 'react';

import BackgroundBubble from '../VerticalSlider/subcomponents/BackgroundBubble';

import './style.scss';

function Timeline({ title, items }) {
  // Set state
  const [fixed, updateFixed] = useState(false);
  const [titleFade, triggerTitleFade] = useState(false);
  // DOM Refs
  const timeLine = useRef(null);
  const timelineTitle = useRef(null);

  const handleScroll = () => {
    // Calculates when the timeline title should be fixed / when it should fade
    window.requestAnimationFrame(() => {
      const timeLineBB = timeLine.current.getBoundingClientRect();
      const timeLineTitleBB = timelineTitle.current.getBoundingClientRect();
      if (timeLineBB.top - window.innerHeight < 0 && timeLineBB.bottom > 0) {
        if ((timeLineTitleBB.top < 110 && !fixed) && (timeLineBB.bottom - window.innerHeight > 0)) {
          updateFixed(true);
          triggerTitleFade(false);
        } else if ((timeLineBB.bottom < 0 && fixed) || timeLineBB.top > 110) {
          updateFixed(false);
          triggerTitleFade(false);
        } else if (timeLineBB.bottom < (window.innerHeight / 2)) {
          triggerTitleFade(true);
          setTimeout(() => {
            updateFixed(false);
          }, 300);
        }
      }
    });
  };

  useEffect(() => {
    // On mount
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="scrollGallery" ref={timeLine}>
    <div id="parallax-container" className="bring-to-front">
        <BackgroundBubble pos={{ top: '5%', left: '5vw' }} />
        <BackgroundBubble pos={{ top: '6%', left: '100vw' }} />
        <BackgroundBubble pos={{ top: '7%', left: '90vw' }} />
        <BackgroundBubble pos={{ top: '8%', left: '10vw' }} />
        <BackgroundBubble pos={{ top: '25%', left: '20vw' }} />
        <BackgroundBubble pos={{ top: '30%', left: '70vw' }} />
        <BackgroundBubble pos={{ top: '35%', left: '25vw' }} />
        <BackgroundBubble pos={{ top: '40%', left: '80vw' }} />
        <BackgroundBubble pos={{ top: '45%', left: '70vw' }} />
        <BackgroundBubble pos={{ top: '50%', left: '30vw' }} />
        <BackgroundBubble pos={{ top: '55%', left: '80vw' }} />
        <BackgroundBubble pos={{ top: '60%', left: '70vw' }} />
        <BackgroundBubble pos={{ top: '65%', left: '20vw' }} />
        <BackgroundBubble pos={{ top: '70%', left: '20vw' }} />
        <BackgroundBubble pos={{ top: '75%', left: '80vw' }} />
        <BackgroundBubble pos={{ top: '80%', left: '75vw' }} />
        <BackgroundBubble pos={{ top: '85%', left: '90vw' }} />
        <BackgroundBubble pos={{ top: '90%', left: '100vw' }} />
        <BackgroundBubble pos={{ top: '95%', left: '90vw' }} />
        <BackgroundBubble pos={{ top: '16%', left: '10vw' }} />
        <BackgroundBubble pos={{ top: '26%', left: '90vw' }} />
        <BackgroundBubble pos={{ top: '36%', left: '10vw' }} />
        <BackgroundBubble pos={{ top: '46%', left: '20vw' }} />
        <BackgroundBubble pos={{ top: '56%', left: '12vw' }} />
        <BackgroundBubble pos={{ top: '66%', left: '80vw' }} />
        <BackgroundBubble pos={{ top: '77%', left: '15vw' }} />
        <BackgroundBubble pos={{ top: '88%', left: '25vw' }} />
        <BackgroundBubble pos={{ top: '99%', left: '10vw' }} />
        <BackgroundBubble pos={{ top: '70%', left: '95vw' }} />
        <BackgroundBubble pos={{ top: '75%', left: '5vw' }} />
        <BackgroundBubble pos={{ top: '80%', left: '10vw' }} />
        <BackgroundBubble pos={{ top: '85%', left: '5vw' }} />
      </div>
      <h3 className={`scrollGallery__title ${fixed ? 'fixed' : ''} ${titleFade ? 'fade' : ''}`} ref={timelineTitle}>
        {title}
      </h3>
      {items.map((item, i) => {
        return (
          <div className={`slides`} key={`slide-${i + 1}`}>
            <div className="text-box">
            <img className="image" src={item.img} alt={item.date} />
              <h4>
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
