function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const basicContainer = document.querySelector('#controls')
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]')
const box = document.querySelector('#boxes');
 
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement('div');
    divElement.style.backgroundColor = getRandomHexColor();
    const size = (30 + 10 * i);
    divElement.style.width = `${size}px`;
    divElement.style.height = `${size}px`;
    
    box.append(divElement)
   }
};


function destroyBoxes() {
  box.innerHTML = '';
};

const onClickCreate = () => {if (box.childElementCount === 0) {
    const amount = basicContainer.firstElementChild.value;
    if (amount.length !== 0) {
      createBoxes(Number(amount));
    }  
  }} ;
const onClickDestroy = () => destroyBoxes();

createBtn.addEventListener("click", onClickCreate);
destroyBtn.addEventListener("click", onClickDestroy);
