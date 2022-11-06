const input = document.querySelector('#validation-input');
const lengthInput = document.querySelector('[data-length = "6"]');

input.addEventListener('blur', () => {
   if(+input.dataset.length === input.value.length){
    input.classList.remove('invalid')
    input.classList.add('valid')
   }else {
    input.classList.remove('valid')
    input.classList.add('invalid')
   }

})