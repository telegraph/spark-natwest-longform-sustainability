import React from 'react';

function BackgroundBubble(props) {

  return (
    <div className="box parallax" style={{ top: `${props.pos.top}`, left: `${props.pos.left}` }} />
  );
}

export default BackgroundBubble;
