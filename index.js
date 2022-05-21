function startGame() {
  const startButton = document.getElementById('startButton').disabled = true;
  createRightAngle()
  let points = 0, seconds = 60;
  let speedYellow = 1500, speedGreen = 1450, speedBlue = 1400, speedRed = 1250, youCanAdd = 2;

  function createRightAngle() {
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
          catchTheColor(id)
        }, true);
      }
      top += 6
    }
  }

  const startTime = setInterval(timeLeft, 1000);
  function timeLeft() {
    --seconds;
    let time = document.getElementById('time')
    time.innerHTML = 'Time: ' + seconds
    if (seconds <= 0) {
      clearInterval(startTime)
    }
  }

  const arrayOfNumbers = [];
  for (let i = 0; i < 9; ++i) {
    arrayOfNumbers[i] = 0;
  }

  function catchTheColor(id) {
    const parentCanvas = document.getElementById('parentCanvas')
    let elementId = parentCanvas.childNodes[id].getAttribute('clickable')
    if (elementId == 1) {
      points += 10;
    }else if (elementId == 2) {
      points += 20;
    }else if (elementId == 3) {
      points += 30;
    }else if (elementId == 4) {
      points -= 40;
    }
    parentCanvas.childNodes[id].removeAttribute('clickable')
    info()
  }
  info()
  function info() {
    let textInfo = document.getElementById('textInfo')
    textInfo.innerHTML = 'Points: ' + points
  }

  addYellow()
  function addYellow() {
    // check if the hole already has a color
    let random;
    for (let i = 0; i < 9; ++i) {
      random = mathRandom.call()
      if (arrayOfNumbers[random] == 0) {
        arrayOfNumbers[random] = 1;
        i = 9;
      } 
    }
    const color = 1;
    addStyleAndAttribute(random, color)
    const intervalRemove = setInterval(function () {
      removeYellow(random)
      clearInterval(intervalRemove)
    }, speedYellow)
    // add the second Collor
    if (points == 30 && youCanAdd == 2) {
      const intervalAdding = setInterval(function () {
        addGreen()
        clearInterval(intervalAdding)
      }, 3500)
      youCanAdd = 3;
    }
  }

  function addStyleAndAttribute(random, color) {
    colors = ['', 'yellow', 'green', 'blue', 'red']
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = colors[color]
    parentCanvas.childNodes[random].setAttribute('clickable', color)
  }

  function removeStyleAndAttribute(random) {
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'white'
    parentCanvas.childNodes[random].removeAttribute('clickable')
  }

  function removeYellow(random) {
    // delete the memory of color
    arrayOfNumbers[random] = 0;
    removeStyleAndAttribute(random)
    const intervalAdding = setInterval(function () {
      addYellow();
      clearInterval(intervalAdding)
    }, speedYellow)
  }

  function addGreen() {
    // check if the hole already has a color
    let random;
    for (let i = 0; i < 9; ++i) {
      random = mathRandom.call()
      if (arrayOfNumbers[random] == 0) {
        arrayOfNumbers[random] = 1;
        i = 9;
      } 
    }
    const color = 2;
    addStyleAndAttribute(random, color)
    const intervalRemove = setInterval(function () {
      removeGreen(random)
      clearInterval(intervalRemove)
    }, speedGreen)
    if (points >= 50 && youCanAdd == 3) {
      const intervalAdding = setInterval(function () {
        addBlue()
        clearInterval(intervalAdding)
      }, 4000)
      youCanAdd = 4;
    }
  }

  function removeGreen(random) {
    // delete the memory of color
    arrayOfNumbers[random] = 0;
    removeStyleAndAttribute(random)
    const intervalAdding = setInterval(function () {
      addGreen();
      clearInterval(intervalAdding)
    }, speedGreen)
  }

  function addBlue() {
    // check if the hole already has a color
    let random;
    for (let i = 0; i < 9; ++i) {
      random = mathRandom.call()
      if (arrayOfNumbers[random] == 0) {
        arrayOfNumbers[random] = 1;
        i = 9;
      } 
    }
    const color = 3;
    addStyleAndAttribute(random, color)
    const intervalRemove = setInterval(function () {
      removeBlue(random)
      clearInterval(intervalRemove)
    }, speedBlue)
    if (points >= 50 && youCanAdd == 4) {
      const intervalAdding = setInterval(function () {
        addRed()
        clearInterval(intervalAdding)
      }, 4200)
      youCanAdd = 5;
    }
  }

  function removeBlue(random) {
    // delete the memory of color
    arrayOfNumbers[random] = 0;
    removeStyleAndAttribute(random)
    const intervalAdding = setInterval(function () {
      addBlue();
      clearInterval(intervalAdding)
    }, speedBlue)
  }

  function addRed() {
    // check if the hole already has a color
    let random;
    for (let i = 0; i < 9; ++i) {
      random = mathRandom.call()
      if (arrayOfNumbers[random] == 0) {
        arrayOfNumbers[random] = 1;
        i = 9;
      } 
    }
    const color = 4;
    addStyleAndAttribute(random, color)
    const intervalRemove = setInterval(function () {
      removeRed(random)
      clearInterval(intervalRemove)
    }, speedRed)
  }

  function removeRed(random) {
    // delete the memory of color
    arrayOfNumbers[random] = 0;
    removeStyleAndAttribute(random)
    const intervalAdding = setInterval(function () {
      addRed();
      clearInterval(intervalAdding)
    }, speedRed)
  }
 
  function mathRandom() {
    let random = Math.floor(Math.random() * 10);
    return random;
  }
}