import React, { useState } from 'react';
const diceEmpty = '/img/dice-empty.png';
const dice1 = '/img/dice1.png';
const dice2 = '/img/dice2.png';
const dice3 = '/img/dice3.png';
const dice4 = '/img/dice4.png';
const dice5 = '/img/dice5.png';
const dice6 = '/img/dice6.png';

const myArray = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [image, setImage] = useState(dice1);

  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * (7 - 1)) + 1;
    setImage(diceEmpty);
    setTimeout(() => setImage(myArray[randomNum]), 900);
  };

  return (
    <div onClick={handleClick}>
      <img style={{ width: '200px', height: '200px' }} src={image} alt="" />
    </div>
  );
}

export default Dice;
