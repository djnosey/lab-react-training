import React from 'react';

function Rating(props) {
  const num = props.children;

  const fullStarsNum = Math.round(num);
  const emptyStarsNum = 5 - fullStarsNum;
  const fullStars = '★';
  const emptyStars = '☆';
  const displayfull = fullStars.repeat(fullStarsNum);
  const displayempty = emptyStars.repeat(emptyStarsNum);
  return (
    <div>
      <h1>{`${displayfull}${displayempty}`}</h1>
    </div>
  );
}

export default Rating;
