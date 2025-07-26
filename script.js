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

let intervalId = null;

document.getElementById('meme-button').addEventListener('click', () => {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomImage = `memes/${memes[randomIndex]}`;
    window.open(randomImage, '_blank');
  }, 2000);
});
