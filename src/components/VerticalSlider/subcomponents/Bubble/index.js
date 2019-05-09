import React, { useState, useEffect, useRef } from 'react';


function Bubble(props) {
  const [fade, setFade] = useState(0);
  const [scrollMove, setScrollMove] = useState(0);
  const [scrollIncrement, setScrollIncrement] = useState(0);
  const bubble = useRef(null);

  const moveBubble = () => {
    // paralax bubble
    const distance = bubble.current.getBoundingClientRect().top - window.innerHeight;
    console.log(distance);
    if (distance < 0) { // IF DISTANCE 0 BUT ALSO IF ITS NOT BOTTOM OF SLIDER (USE HEIGHT PROP)
      const scrollAmount = scrollIncrement;
      const calcScroll = props.scrolled * scrollAmount;
      setScrollMove(calcScroll);
    }
  };

  const bubbleFade = () => {
    window.requestAnimationFrame(() => {
      const distance = bubble.current.getBoundingClientRect().top - window.innerHeight;
      const distanceBottom = bubble.current.getBoundingClientRect().bottom - window.innerHeight;
      const halfWindow = window.innerHeight / 2;
      if (distance < 0 && distance > (-halfWindow)) {
        moveBubble();
        const opacity = distance / -halfWindow;
        setFade(opacity);
      } else if (distance < 0 && distance < (-halfWindow)) {
        moveBubble();
        const opacity = ((distanceBottom / -halfWindow) - 2) * -1;
        setFade(opacity);
      }
    });
  };

  useEffect(() => {
    // on mount
    let random = Math.random() * (0.2) - (0.1) + 0.1;
    random = parseInt(random * 100, 10) / 100;
    setScrollIncrement(random);
  }, []);

  useEffect(() => {
    // on update
    window.addEventListener('scroll', bubbleFade);
    return function cleanup() {
      window.removeEventListener('scroll', bubbleFade);
    };
  });

  return (
    <div className="vertical-item" 
    style={{ right: `${props.right}%`, top: `${props.top}%`, opacity: `${fade}`, transform: `translate3d(0, ${scrollMove}px, 0)`
     }} ref={bubble}>
      <h4>{props.title}</h4>
      <p>{props.copy}</p>
    </div>
  )
}

export default Bubble;
