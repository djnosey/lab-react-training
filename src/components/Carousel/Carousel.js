import React, { useState } from 'react';

function Carousel(props) {
  const imgArray = props.imgs;

  //set state as first image and index = 0
  const [image, setImage] = useState(imgArray[0]);
  const [index, setIndex] = useState(0);

  //click on right hand button
  const clickRight = () => {
    //copy the index(state) to a var
    let num = index;
    //check if its in the boundries and if so...
    if (num >= 0 && num < 3) {
      //increment the number
      num++;
      //set the index state to the new incremented number
      setIndex(num);
      //set the image state with the newly incremented index
      setImage(imgArray[index]);

      //else when index gets to 3, reset it back to zero
    } else if (num >= 3) {
      setIndex(0);
      setImage(imgArray[index]);
    }
  };

  //and the same but opposite way

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

  //checking console, can see that the image is one change
  //behind the index ??
  console.log(index);

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
