import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  return (
    <div
      style={{
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        width: '50%',
        height: '100px',
      }}
      className="SingleBoxColor"
    >
      r={props.r} g={props.g} b={props.b} <br></br>{' '}
      {rgbToHex(props.r, props.g, props.b)}
    </div>
  );
}

export default BoxColor;
