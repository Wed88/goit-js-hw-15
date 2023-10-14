const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onFontSize = () => {
  textEl.style.fontSize = inputEl.value + 'px';
};

onFontSize();

inputEl.addEventListener('input',onFontSize)

