import React from 'react';
import './IdCard.css';

function IdCard(props) {
  return (
    <div className="idCard__container">
      <div className="idCard__image">
        <img src={props.picture} alt="" />
      </div>
      <div className="idCard__info">
        <p>
          <strong>first Name:</strong> {props.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {props.lastName}
        </p>
        <p>
          <strong>Gender:</strong> {props.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.height}
        </p>
        <p>
          <strong>Birth:</strong> {props.birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
