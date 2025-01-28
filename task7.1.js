function handleNum(num, evenCallback, oddCallback) {
  num % 2 === 0 ? evenCallback() : oddCallback();
}

handleNum(
  9,
  () => console.log('number is even'),
  () => console.log('number is odd')
);
handleNum(
  8,
  () => console.log('number is even'),
  () => console.log('number is odd')
);
