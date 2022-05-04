function startGame() {
  createHoles()
  let points = 0;
  let speedMole = 1000, speedMole_2 = 1000, speedMole_3 = 1000;
  let once = 1, random, random_2, random_3;

  function createHoles() {
    const parentCanvas = document.getElementById('parentCanvas')
    let canvas = document.createElement('CANVAS')
    let width = 6, height = 3, left = 10, top = 6;
    for (let i = 1, id = 1; i <= 3; ++i) {
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

  function catchTheMole() {
    points += 10;
    if (points == 30) {
      alert(points)
      speedMole = speedMole - 50;
    }else if (points == 50) {
      alert(points)
      speedMole_2 = speedMole_2 - 50;
      speedMole = speedMole - 50;
    }
  }

  addingMole()

  function addingMole(intervalAdding) {
    clearInterval(intervalAdding)
    random = mathRandom();
    if (random == random_2 || random_3 == random) {
      random = mathRandom()
    }
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'yellow'
    parentCanvas.childNodes[random].addEventListener("click", catchTheMole, true);
    const intervalRemove = setInterval(function () {
      removeMole(random, intervalRemove)
    }, speedMole)
    if (points == 30 && once == 1) {
      addingMole_2()
      once = 2;
    }
  }

  function removeMole(random, intervalRemove) {
    clearInterval(intervalRemove)
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'white'
    parentCanvas.childNodes[random].removeEventListener("click", catchTheMole, true);
    const intervalAdding = setInterval(function () {
      addingMole(intervalAdding)
    }, speedMole)
  }

  function addingMole_2(intervalAdding) {
    clearInterval(intervalAdding)
    random_2 = mathRandom();
    if (random_2 == random || random_2 == random_3) {
      random_2 = mathRandom()
    }
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_2].style.backgroundColor = 'yellow'
    parentCanvas.childNodes[random_2].addEventListener("click", catchTheMole, true);
    const intervalRemove = setInterval(function () {
      removeMole_2(random_2, intervalRemove)
    }, speedMole_2)
    if (points == 70 && once == 2) {
      addingMole_3()
      once = 0;
    }
  }

  function removeMole_2(random_2, intervalRemove) {
    clearInterval(intervalRemove)
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_2].style.backgroundColor = 'white'
    parentCanvas.childNodes[random_2].removeEventListener("click", catchTheMole, true);
    const intervalAdding = setInterval(function () {
      addingMole_2(intervalAdding)
    }, speedMole_2)
  }

  function addingMole_3(intervalAdding) {
    clearInterval(intervalAdding)
    random_3 = mathRandom();
    if (random_3 == random || random_3 == random_2) {
      random_3 = mathRandom()
    }
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_3].style.backgroundColor = 'yellow'
    parentCanvas.childNodes[random_3].addEventListener("click", catchTheMole, true);
    const intervalRemove = setInterval(function () {
      removeMole_3(random_3, intervalRemove)
    }, speedMole_3)
  }

  function removeMole_3(random_3, intervalRemove) {
    clearInterval(intervalRemove)
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_3].style.backgroundColor = 'white'
    parentCanvas.childNodes[random_3].removeEventListener("click", catchTheMole, true);
    const intervalAdding = setInterval(function () {
      addingMole_3(intervalAdding)
    }, speedMole_3)
  }

  function mathRandom() {
    let random = Math.floor(Math.random() * 9) + 0;
    return random;
  }
  
  

  

  
  
  

  
}