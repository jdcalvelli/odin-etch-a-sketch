//create divs w javascript

const container = document.querySelector('.container')

function createDivs(numDivs) {
  for (var i = 0; i < numDivs; i++) {
    container.appendChild(document.createElement('div'));
  }
}

createDivs(16)
