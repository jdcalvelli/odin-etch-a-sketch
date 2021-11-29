//VARIABLES

let numDivs;
let numDivsPerSide;
let divSideLength;

const body = document.querySelector('body');

const container = document.querySelector('.container');

const resetButton = document.createElement('button');
body.appendChild(resetButton);
resetButton.textContent = 'Reset Board';

let etchPixelList;

//SETUP
//set the default board size using default css in css file
createDivs(256);

//LOGIC

resetButton.addEventListener('click', () => {
  resetBoard();
  setBoardSize();
  createDivs(numDivs);
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
      etchPixel.style.backgroundColor = 'black';
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
  numDivsPerSide = window.prompt('how many squares wide do you want one side to be?');
  //figure out total number of divs
  numDivs = Math.pow(numDivsPerSide, 2);
  //figure out height/width of an individual div
  divSideLength = 384 / numDivsPerSide;
}
