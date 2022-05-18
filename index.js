function startGame() {
  const startButton = document.getElementById('startButton').disabled = true;
  createHoles()
  let points = 0;
  let speedMole = 1500, speedMole2 = 1450, youCanAdd = 1;

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
        parentCanvas.childNodes[id].addEventListener("click", function() {
          let id = this.id;
          catchTheMole(id)
        }, true);
      }
      top += 6
    }
  }

  const arrayOfNumbers = [];
  for (let i = 0; i < 9; ++i) {
    arrayOfNumbers[i] = 0;
  }

  function catchTheMole(id) {
    const parentCanvas = document.getElementById('parentCanvas')
    let elementId = parentCanvas.childNodes[id].getAttribute('clickable')
    if (elementId == 1) {
      points += 10;
      parentCanvas.childNodes[id].removeAttribute('clickable')
    } else if (elementId == 2) {
      points += 20;
      parentCanvas.childNodes[id].removeAttribute('clickable')
    }
    info()
  }
  info()
  function info() {
    let textInfo = document.getElementById('textInfo')
    textInfo.innerHTML = 'Points: ' + points
  }

  addMole()
  function addMole() {
    // check if the hole already has a color
    let random;
    for (let i = 0; i < 9; ++i) {
      random = mathRandom.call()
      if (arrayOfNumbers[random] == 0) {
        arrayOfNumbers[random] = 1;
        i = 11;
      } 
    }
    //alert(random + ' add')
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'yellow'
    parentCanvas.childNodes[random].setAttribute('clickable', 1)
    const intervalRemove = setInterval(function () {
      removeMole(random)
      clearInterval(intervalRemove)
    }, speedMole)
    if (points == 30 && youCanAdd == 1) {
      const intervalAdding = setInterval(function () {
        addMole2()
        clearInterval(intervalAdding)
      }, 3500)
      youCanAdd = 0;
    }
  }

  function removeMole(random) {
    // delete the memory of color
    arrayOfNumbers[random] = 0;
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'white'
    parentCanvas.childNodes[random].removeAttribute('clickable')
    const intervalAdding = setInterval(function () {
      addMole();
      clearInterval(intervalAdding)
    }, speedMole)
  }

  function addMole2() {
    // check if the hole already has a color
    let random;
    for (let i = 0; i < 9; ++i) {
      random = mathRandom.call()
      if (arrayOfNumbers[random] == 0) {
        arrayOfNumbers[random] = 1;
        i = 11;
      } 
    }
    //alert(random + ' add')
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'green'
    parentCanvas.childNodes[random].setAttribute('clickable', 2)
    const intervalRemove = setInterval(function () {
      removeMole2(random)
      clearInterval(intervalRemove)
    }, speedMole2)
  }

  function removeMole2(random) {
    // delete the memory of color
    arrayOfNumbers[random] = 0;
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'white'
    parentCanvas.childNodes[random].removeAttribute('clickable')
    const intervalAdding = setInterval(function () {
      addMole2();
      clearInterval(intervalAdding)
    }, speedMole2)
  }
 
  function mathRandom() {
    let random = Math.floor(Math.random() * 10) + 1;
    return random;
  }
}