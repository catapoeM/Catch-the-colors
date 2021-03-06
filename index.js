function startGame() {
  document.getElementById('startButton').disabled = true;

  // This function remove the main Text which I have at the beginning with the info about the game.
  removeTextInfo()
  function removeTextInfo() {
    const gameInfo = document.querySelectorAll('.gameInfo')
    for (let i = 0; i < gameInfo.length; ++i) {
      gameInfo[i].innerText = '';
    }
  }
  // let Variables which I use later in the project
  let points = 0, seconds = 60;
  let speedYellow = 1500, speedGreen = 1450, speedBlue = 1400, speedRed = 1250, youCanAdd = 2;

  // Create 9 canvas (rectAngles), style them and add an Event with a function for each element.
  createRectAngle()
  function createRectAngle() {
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

  // function for the game timer (60 seconds)
  const startTime = setInterval(timeLeft, 1000);
  function timeLeft() {
    --seconds;
    let time = document.getElementById('time')
    time.innerHTML = 'Time: ' + seconds
    if (seconds <= 0) {
      clearInterval(startTime)
      gameFinished()
    }
  }

  // array of numbers where I check the elements, which one has color or not.
  const arrayOfNumbers = [];
  initialiazeArray()
  function initialiazeArray() {
    for (let i = 0; i < 9; ++i) {
      arrayOfNumbers[i] = 0;
    }
  }
  
  // This function has a parameter. It checks which color is clicked and its property.
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
    // Remove attribute of some canvas when the color has disappeared
    parentCanvas.childNodes[id].removeAttribute('clickable')
    info()
  }

  // Refresh points information
  info()
  function info() {
    let pointsInfo = document.getElementById('pointsInfo')
    pointsInfo.innerHTML = 'Points: ' + points
  }

  // add first color at some interval
  addYellow()
  function addYellow() {
    // check if the rectangle already has a color
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

  // remove the first color at some interval
  function removeYellow(random) {
    // delete the memory of color
    arrayOfNumbers[random] = 0;
    removeStyleAndAttribute(random)
    if (youCanAdd != 0) {
      const intervalAdding = setInterval(function () {
        addYellow();
        clearInterval(intervalAdding)
      }, speedYellow)
    }
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
    if (youCanAdd != 0) {
      const intervalAdding = setInterval(function () {
        addGreen();
        clearInterval(intervalAdding)
      }, speedGreen)
    }
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
    if (youCanAdd != 0) {
      const intervalAdding = setInterval(function () {
        addBlue();
        clearInterval(intervalAdding)
      }, speedBlue)
    }
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
    if (youCanAdd != 0) {
      const intervalAdding = setInterval(function () {
        addRed();
        clearInterval(intervalAdding)
      }, speedRed)
    }
  }

  // add color and attribute for a given random rectangle
  function addStyleAndAttribute(random, color) {
    if (youCanAdd != 0) {
      colors = ['', 'yellow', 'green', 'blue', 'red']
      const parentCanvas = document.getElementById('parentCanvas')
      parentCanvas.childNodes[random].style.backgroundColor = colors[color]
      parentCanvas.childNodes[random].setAttribute('clickable', color)
    }
  }

  // remove color and attribute for a given random rectangle
  function removeStyleAndAttribute(random) {
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'white'
    parentCanvas.childNodes[random].removeAttribute('clickable')
  }
 
  // return a random number
  function mathRandom() {
    let random = Math.floor(Math.random() * 10);
    return random;
  }

  // when the game is finished, the reset game button is creating, but the colors stop and no longer are creating
  function gameFinished() {
    const resetButtonParent = document.getElementById('resetButtonParent')
    const resetGameButton = document.createElement('button')
    resetGameButton.innerText = 'Reset game'
    resetGameButton.style.position = 'absolute'
    resetGameButton.style.left = 50 + '%'
    resetGameButton.style.bottom = 1 + 'cm'
    resetGameButton.addEventListener('click', function() {
      resetGame()
    })
    clearTheRectAngles()
    resetButtonParent.appendChild(resetGameButton)
  }

  // clear each rectangle from any color
  function clearTheRectAngles() {
    youCanAdd = 0;
    const parentCanvas = document.getElementById('parentCanvas')
    for (let i = 0; i < parentCanvas.children.length; ++i) {
      parentCanvas.childNodes[i].style.backgroundColor = 'white'
      parentCanvas.childNodes[i].removeAttribute('clickable')
    }
  }

  // and reset the game, which remove the reset button, remove every child of the parent canvas,
  // enables the start button and reinitialized the variables
  function resetGame() {
    const parentCanvas = document.getElementById('parentCanvas')
    const resetButtonParent = document.getElementById('resetButtonParent')
    while (parentCanvas.firstChild) {
      parentCanvas.removeChild(parentCanvas.firstChild);
    }
     points = 0, seconds = 60;
     speedYellow = 1500, speedGreen = 1450, speedBlue = 1400, speedRed = 1250, youCanAdd = 2;
    resetButtonParent.removeChild(resetButtonParent.lastChild)
    document.getElementById('startButton').disabled = false;
  }
}