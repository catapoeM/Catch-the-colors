function startGame() {
  const startButton = document.getElementById('startButton').disabled = true;
  createHoles()
  let points = 0;
  let speedMole = 1500, speedMole_2 = 1500, speedMole_3 = 1500, speedMole_4 = 1500;
  let next = 1, random, random_2, random_3, random_4, unclick = -1;
  const arrayOfNumbers = [];
  for (let i = 0; i <= 9; ++i) {
    arrayOfNumbers[i] = 0;
  }

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
    if (unclick != this.id) {
      points += 10;
      if (points == 30) {
        //speedMole = speedMole - 50;
      }else if (points == 50) {
        //speedMole_2 = speedMole_2 - 50;
        //speedMole = speedMole - 50;
      }
    }
    unclick = this.id
  }

  function catchTheRedMole() {
    if (unclick != this.id) {
      points -= 50;
    }
    unclick = this.id;
  }

  function info() {
    let textInfo = document.getElementById('textInfo')
    textInfo.innerHTML = 'Points: ' + points
  }

  addMole()
  function addMole(intervalAdding) {
    clearInterval(intervalAdding)
    // check if the hole already has a color
    for (let i = 0; i <= 9; ++i) {
      random = mathRandom();
      if (arrayOfNumbers[random] == 0) {
        arrayOfNumbers[random] = 1;
        i = 10;
        unclick = random;
      } 
    }
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'yellow'
    parentCanvas.childNodes[random].addEventListener("click", catchTheMole, true);
    const intervalRemove = setInterval(function () {
      removeMole(random, intervalRemove)
    }, speedMole)
    if (points >= 30 && next == 1) {
      addMole_2()
      next = 2;
    }
  }

  function removeMole(random, intervalRemove) {
    // delete the memory of color
    arrayOfNumbers[random] = 0;
    unclick = -1
    info()
    clearInterval(intervalRemove)
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'white'
    parentCanvas.childNodes[random].removeEventListener("click", catchTheMole, true);
    const intervalAdding = setInterval(function () {
      addMole(intervalAdding)
    }, speedMole)
  }

  function addMole_2(intervalAdding) {
    clearInterval(intervalAdding)
    // check if the hole already has a color
    for (let i = 0; i <= 9; ++i) {
      random_2 = mathRandom();
      if (arrayOfNumbers[random_2] == 0) {
        arrayOfNumbers[random_2] = 1;
        i = 10;
        unclick = random_2;
      } 
    }
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_2].style.backgroundColor = 'green'
    parentCanvas.childNodes[random_2].addEventListener("click", catchTheMole, true);
    const intervalRemove = setInterval(function () {
      removeMole_2(random_2, intervalRemove)
    }, speedMole_2)
    if (points >= 70 && next == 2) {
      addMole_3()
      next = 3;
    }
  }

  function removeMole_2(random_2, intervalRemove) {
    // delete the memory of color
    arrayOfNumbers[random_2] = 0;
    unclick = -1
    info()
    clearInterval(intervalRemove)
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_2].style.backgroundColor = 'white'
    parentCanvas.childNodes[random_2].removeEventListener("click", catchTheMole, true);
    const intervalAdding = setInterval(function () {
      addMole_2(intervalAdding)
    }, speedMole_2)
  }

  function addMole_3(intervalAdding) {
    clearInterval(intervalAdding)
    // check if the hole already has a color
    for (let i = 0; i <= 9; ++i) {
      random_3 = mathRandom();
      if (arrayOfNumbers[random_3] == 0) {
        arrayOfNumbers[random_3] = 1;
        i = 10;
        unclick = random_3;
      } 
    }
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_3].style.backgroundColor = 'blue'
    parentCanvas.childNodes[random_3].addEventListener("click", catchTheMole, true);
    const intervalRemove = setInterval(function () {
      removeMole_3(random_3, intervalRemove)
    }, speedMole_3)
    if (points >= 100 && next == 3) {
      addRedMole()
      next = 4;
    }
  }

  function removeMole_3(random_3, intervalRemove) {
    // delete the memory of color
    arrayOfNumbers[random_3] = 0;
    unclick = -1
    info()
    clearInterval(intervalRemove)
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_3].style.backgroundColor = 'white'
    parentCanvas.childNodes[random_3].removeEventListener("click", catchTheMole, true);
    const intervalAdding = setInterval(function () {
      addMole_3(intervalAdding)
    }, speedMole_3)
  }

  function addRedMole(intervalAdding) {
    clearInterval(intervalAdding)
    // check if the hole already has a color
    for (let i = 0; i <= 9; ++i) {
      random_4 = mathRandom();
      if (arrayOfNumbers[random_4] == 0) {
        arrayOfNumbers[random_4] = 1;
        i = 10;
        unclick = random_4;
      } 
    }
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_4].style.backgroundColor = 'red'
    parentCanvas.childNodes[random_4].addEventListener("click", catchTheRedMole, true);
    const intervalRemove = setInterval(function () {
      removeRedMole(random_4, intervalRemove)
    }, speedMole_4)
  }

  function removeRedMole(random_4, intervalRemove) {
    // delete the memory of color
    arrayOfNumbers[random_4] = 0;
    unclick = -1
    info()
    clearInterval(intervalRemove)
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random_4].style.backgroundColor = 'white'
    parentCanvas.childNodes[random_4].removeEventListener("click", catchTheRedMole, true);
    const intervalAdding = setInterval(function () {
      addRedMole(intervalAdding)
    }, speedMole_4)
  }

  function mathRandom() {
    let random = Math.floor(Math.random() * 9) + 0;
    return random;
  }
}