import React from 'react';

import './App.css';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard/IdCard';
import LikeButton from './components/LikeButton/LikeButton';
import Random from './components/Random/Random';

function App() {
  return (
    <div className="App">
      <h1>Iteration 1 - ID Cards</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <div style={{ border: '5px solid green' }}>
        <h1>Iteration 2 - Greetings</h1>
        <Greetings en>Steve</Greetings>
        <Greetings es>Pedro</Greetings>
        <Greetings de>Caro</Greetings>
        <Greetings fr>Gaston</Greetings>
      </div>
      <h1>Iteration 3 - Random Numbers</h1>
      <Random min={1} max={100} />
      <Random min={10} max={2100} />
      <Random min={500} max={650} />
      <Random min={13} max={20} />
      <h1>Iteration 8 - Fancy Like Buttons </h1>
      <div className="likeButtons">
        <LikeButton />
        <LikeButton />
        <LikeButton />
      </div>
      <h1>Iteration 9 - Clickable picture</h1>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
    </div>
  );
}

export default App;
