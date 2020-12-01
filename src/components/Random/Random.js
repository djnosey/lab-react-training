import React from 'react';
import './Random.css';

function Random(props) {
  const number = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );

  return (
    <div className="random">
      <h3>
        Random value between {props.min} and {props.max} = {number}
      </h3>
    </div>
  );
}

export default Random;
