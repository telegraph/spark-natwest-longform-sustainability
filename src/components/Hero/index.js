import React from 'react';
import ReadMore from '../ReadMore';

import './style.scss';

const Hero = props => (
  <div className="hero">
    <div className="hero__content">
      <h1>The future<br /> of sustainability</h1>
      <p>
        Corporate social responsibility is big business - but how can UK business-owners embed sustainability into their workplace cultures?
      </p>
    </div>
    <div className="hero__art">
      <img class="art-desktop" src={props.img} alt="Hero" />
      <img class="art-mobile" src={props.imgMobile} alt="Hero" />
    </div>
    <ReadMore content="Scroll to read on" />
  </div>
);

export default Hero;
