import React, { useState } from 'react';
import './LikeButton.css';

function LikeButton() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('purple');
  const [colorIndex, setColorIndex] = useState(1);

  const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    let newCount = count;
    newCount++;
    let myIndex = colorIndex;
    myIndex++;
    setCount(newCount);
    if (myIndex > 5) {
      myIndex = 0;
    }
    setColorIndex(myIndex);
    let myColor = colorArray[colorIndex];
    setColor(myColor);
  };

  return (
    <div className="likeButtonDiv">
      <button
        style={{ backgroundColor: color, width: '100px', height: '50px' }}
        onClick={handleClick}
      >
        {count} likes
      </button>
    </div>
  );
}

export default LikeButton;
