function startGame() {
  createHoles()

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
        canvas.addEventListener('click', function() {
          alert(this.getAttribute('id'))
        })
        left += 12
        parentCanvas.appendChild(canvas)
      }
      top += 6
    }
  }

  addingMole()

  function addingMole(intervalAdding) {
    clearInterval(intervalAdding)
    let random = mathRandom()
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'yellow'
    const intervalRemove =  setInterval(function () {
      removeMole(random, intervalRemove)
      }, 1000)
  }

  function removeMole(random, intervalRemove) {
    clearInterval(intervalRemove)
    const parentCanvas = document.getElementById('parentCanvas')
    parentCanvas.childNodes[random].style.backgroundColor = 'white'
    const intervalAdding = setInterval(function () {
      addingMole(intervalAdding)
      }, 1000)
      
  }

  function mathRandom() {
    let random = Math.floor(Math.random() * 9) + 0;
    return random;
  }
  
  

  

  
  
  

  
}