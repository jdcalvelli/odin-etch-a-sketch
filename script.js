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

//create an event listener on mouse enter the div

const etchPixelList = document.querySelectorAll('.etchPixel');
etchPixelList.forEach((etchPixel) => {
  etchPixel.addEventListener('mouseover', () => {
    etchPixel.setAttribute('style', 'background-color: black');
  });
});
