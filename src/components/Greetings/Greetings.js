import React from 'react';

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
    <div>
      {greetingStr} {props.children}
    </div>
  );
}

export default Greetings;
