//VARIABLES

let numDivs;
let numDivsPerSide;
let divSideLength;

const body = document.querySelector('body');

const container = document.querySelector('.container');

const resetButton = document.createElement('button');
body.appendChild(resetButton);
resetButton.textContent = 'Reset Board';

const pixelColorToggle = document.createElement('button');
body.appendChild(pixelColorToggle);
pixelColorToggle.textContent = 'black and white pen';

const darkenPixelButton = document.createElement('button');
body.appendChild(darkenPixelButton);
darkenPixelButton.textContent = 'darken pixels over time'

let etchPixelList;

let rainbow = false;
let darken = false;

let darkeningBrightness = getRandomIntInclusive(0, 100);

//SETUP
//set the default board size using default css in css file
createDivs(256);

//LOGIC

resetButton.addEventListener('click', () => {
  resetBoard();
  setBoardSize();
  createDivs(numDivs);
});

pixelColorToggle.addEventListener('click', () => {
  if (rainbow) {
    rainbow = false;
    pixelColorToggle.textContent = 'black and white pen';
  }
  else {
    rainbow = true;
    pixelColorToggle.textContent = 'rainbow pen';
  }
});

darkenPixelButton.addEventListener('click', () => {
  if (darken) {
    darken = false;
    darkenPixelButton.textContent = 'darken pixels over time';
    darkeningBrightness = getRandomIntInclusive(0, 360);
  }
  else {
    darken = true;
    darkenPixelButton.textContent = 'revert darkening';
  }
});

//HELPER FUNCTIONS
function createDivs(numDivs) {
  //actually make divs in dom
  for (var i = 0; i < numDivs; i++) {
    let etchPixel = document.createElement('div');
    etchPixel.classList.add('etchPixel');
    //etchPixel.textContent = `test ${i}`;
    container.appendChild(etchPixel);
  }
  //set individual div height and width
  etchPixelList = document.querySelectorAll('.etchPixel');
  etchPixelList.forEach((etchPixel) => {
    etchPixel.style.height = `${divSideLength}px`;
    etchPixel.style.width = `${divSideLength}px`;
  });
  //add mouseover event to each div
  etchPixelList.forEach((etchPixel) => {
    etchPixel.addEventListener('mouseover', () => {
      if (darken) {
        darkeningBrightness = darkeningBrightness - 10;
      }
      console.log(darkeningBrightness);

      if (rainbow == true && darken == false) {
        etchPixel.style.backgroundColor =
        `hsl(${getRandomIntInclusive(0,360)},
        ${getRandomIntInclusive(0,100)}%,
        ${getRandomIntInclusive(0,100)}%)`;
      }
      else if (rainbow == true && darken == true) {
        etchPixel.style.backgroundColor =
        `hsl(${getRandomIntInclusive(0,360)},
        ${getRandomIntInclusive(0,100)}%,
        ${darkeningBrightness}%)`;
      }
      else {
        etchPixel.style.backgroundColor = 'black';
      }
    });
  });
}

function resetBoard() {
  //remove old divs before new ones are created
  etchPixelList.forEach((etchPixel) => {
    container.removeChild(etchPixel);
  });
}

function setBoardSize() {
  //prompt player for num divs per side
  //check to make sure numDivsPerSide is below 100
  let promptResponse = window.prompt('how many squares wide do you want one side to be?');
  if (promptResponse >= 100) {
    alert('number was too large, press the reset button again to set a board size');
  }
  else {
    numDivsPerSide = promptResponse;
  }
  //figure out total number of divs
  numDivs = Math.pow(numDivsPerSide, 2);
  //figure out height/width of an individual div
  divSideLength = 384 / numDivsPerSide;
}

//found on MDN Web Docs, to be used for the rainbow option
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
