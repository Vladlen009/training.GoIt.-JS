
const input = document.querySelector('#font-size-control'),
text = document.querySelector('#text');

input.addEventListener('input',() => {
text.style.fontSize = input.value + 'px';
})