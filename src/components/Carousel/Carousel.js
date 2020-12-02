import React, { useState } from 'react';

function Carousel(props) {
  const imgArray = props.imgs;

  const [image, setImage] = useState(imgArray[0]);
  const [index, setIndex] = useState(1);
  console.log(index);

  const clickLeft = () => {
    let num = index;
    if (num <= 3 && num > 0) {
      num--;
      setIndex(num);
      setImage(imgArray[index]);
    } else if (num === 0) {
      setIndex(3);
      setImage(imgArray[index]);
    }
  };

  const clickRight = () => {
    let num = index;
    if (num >= 0 && num < 3) {
      num++;
      setIndex(num);
      setImage(imgArray[index]);
    } else if (num >= 3) {
      setIndex(0);
      setImage(imgArray[index]);
    }
  };

  return (
    <div>
      <h1>Iteration 11 - Carousel</h1>
      <button onClick={clickLeft}>left</button>
      <img src={image} alt={image} />
      <button onClick={clickRight}>right</button>
    </div>
  );
}

export default Carousel;
