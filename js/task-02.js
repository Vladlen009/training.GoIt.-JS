const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients') 



function setListElement(array){
  const arr = []
    for(let item of array){
        const li = document.createElement("li");
        li.textContent = item;
        li.classList.add('item');
        arr.push(li);
    }
    list.append(...arr);
}



setListElement(ingredients);
