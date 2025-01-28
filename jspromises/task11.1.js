// task11.1js

function saySmth(phrase, name) {
  console.log(`${phrase} ${name}!`);
}

const timerId = setTimeout(saySmth, 7000, 'Hi, Irina', 'How are you?');
