import React from 'react';
import './Greetings.css';

function Greetings(props) {
  const languages = {
    de: 'guten tag',
    en: 'hello',
    es: 'hola',
    fr: 'bonjour',
  };

  let greetingStr = '';

  const keys = Object.keys(props);

  keys.forEach((key) => {
    let customGreeting = languages[key];
    if (customGreeting) {
      greetingStr += customGreeting;
    }
  });

  return (
    <div className="greetings__div">
      {greetingStr} {props.children}
    </div>
  );
}

export default Greetings;
