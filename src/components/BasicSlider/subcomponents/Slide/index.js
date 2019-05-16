import React, {useRef, useEffect} from 'react';

export default function Slide(props) {
  const slide = useRef(null);

  useEffect(() => {
    if (props.currentSlide === props.i) {
      props.getHeight(slide);
    }
  }, [props.currentSlide]);


  return (
    <div ref={slide}
      className={`basic-slider__item ${
        props.currentSlide === props.i ? 'visible' : ''
        }`}>
      <div className="img-container">
        <img className="img-photo" src={props.img} />
        <img className="img-logo" src={props.logo} />
      </div>
      <p dangerouslySetInnerHTML={{__html: props.copy}} />
    </div>
  )
}
