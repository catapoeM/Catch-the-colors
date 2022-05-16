function startGame() {
  const startButton = document.getElementById('startButton').disabled = true;
  createHoles()
  let points = 0;
  let speedMole = 1500;
  let random, clickedId = -1, clicksAmount = 0;

  function createHoles() {
    const parentCanvas = document.getElementById('parentCanvas')
    let canvas;
    let width = 6, height = 3, left = 10, top = 6;
    for (let i = 1, id = 0; i <= 3; ++i) {
      left = 10;
      for (let j = 1; j <= 3; ++j, ++id) {
        canvas = document.createElement('CANVAS')
        canvas.style.width = width + 'cm'
        canvas.style.height = height + 'cm'
        canvas.style.color = 'black'
        canvas.style.border = '2px solid'
        canvas.style.position = 'absolute'
        canvas.style.left = left + 'cm'
        canvas.style.top = top + 'cm'
        canvas.setAttribute('id', id)
        left += 12
        parentCanvas.appendChild(canvas)
      }
      top += 6
    }
  }

  const arrayOfNumbers = [];
  for (let i = 0; i < 9; ++i) {
    arrayOfNumbers[i] = 0;
  }

  function catchTheMole(id) {
    alert(id)
    if (id != clickedId && clicksAmount < 1) {
      points += 10;
      ++clicksAmount
    }
    clickedId = id
  }

  function info() {
    let textInfo = document.getElementById('textInfo')
    textInfo.innerHTML = 'Points: ' + points
  }

  addMole()
  function addMole() {
    // check if the hole already has a color
    for (let i = 0; i < 9; ++i) {
      random = mathRandom();
      if (arrayOfNumbers[random] == 0) {
        arrayOfNumbers[random] = 1;
        i = 11;
      } 
    }
    alert(random + ' add')
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'yellow'
    parentCanvas.childNodes[random].addEventListener("click", function() {
      let id = this.id;
      catchTheMole(id)
    });
    const intervalRemove = setInterval(function () {
      removeMole(random)
      clearInterval(intervalRemove)
    }, speedMole)
  }

  function removeMole(random) {
    alert(random + ' remove')
    // delete the memory of color
    arrayOfNumbers[random] = 0;
    info()
    clicksAmount = 0;
    clickedId = -1;
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'white'
    parentCanvas.childNodes[random].removeEventListener("click", catchTheMole, true);
    const intervalAdding = setInterval(function () {
      addMole();
      clearInterval(intervalAdding)
    }, speedMole)
  }
 
  function mathRandom() {
    let random = Math.floor(Math.random() * 10) + 1;
    return random;
  }
}