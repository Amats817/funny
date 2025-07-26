const memes = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.png'
];

const button = document.getElementById('meme-button');
let intervalId = null;

button.addEventListener('click', () => {
  if (intervalId === null) {

    intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * memes.length);
      const randomImage = `memes/${memes[randomIndex]}`;
      window.open(randomImage, '_blank');
    }, 1500);
    button.querySelector('.front').textContent = 'STOP';
  } else {
   
    clearInterval(intervalId);
    intervalId = null;
    button.querySelector('.front').textContent = 'GO';
  }
});
