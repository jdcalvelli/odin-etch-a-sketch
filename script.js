//create divs w javascript

const container = document.querySelector('.container')

function createDivs(numDivs) {
  for (var i = 0; i < numDivs; i++) {
    let etchPixel = document.createElement('div');
    etchPixel.classList.add('etchPixel');
    //etchPixel.textContent = `test ${i}`;
    container.appendChild(etchPixel);
  }
}

createDivs(256)
