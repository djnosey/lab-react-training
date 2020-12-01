import React, { useState } from 'react';

function ClickablePicture(props) {
  const pic1 = props.img;
  const pic2 = props.imgClicked;

  const [clicked, setClicked] = useState(true);

  const handleClick = () => {
    const myClick = !clicked;
    setClicked(myClick);
  };
  return (
    <div style={{ border: '5px solid black', margin: '10px' }}>
      <h1>click me!!!</h1>
      <img onClick={handleClick} src={clicked ? pic1 : pic2} alt="" />
    </div>
  );
}

export default ClickablePicture;
