import React, { useEffect, useState } from 'react';
import ReadMore from '../ReadMore';

import './style.scss';

function Hero({img, imgMobile}) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // On mount
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="hero">
      <div className={`hero__content ${loaded ? 'visible' : ''}`}>
        <h1>
          The future
          <br />
          of sustainability
        </h1>
        <p>
          Corporate social responsibility is big business - but how can UK business-owners embed sustainability into their workplace cultures?
        </p>
      </div>
      <div className={`hero__art ${loaded ? 'visible-art' : ''}`}>
        <img className="art-desktop" src={img} alt="Hero" />
        <img className="art-mobile" src={imgMobile} alt="Hero" />
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;
