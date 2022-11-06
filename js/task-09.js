function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const button = document.querySelector('.change-color');
const color = document.querySelector('.color');


button.addEventListener('click', () => {
    const randomColor = getRandomHexColor()
    document.querySelector('body').style.backgroundColor = randomColor;
    color.textContent = randomColor
})