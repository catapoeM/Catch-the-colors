function startGame() {
  createHoles()

  function createHoles() {
    let parentCanvas = document.getElementById('parentCanvas')
    let canvas = document.createElement('CANVAS')
    let width = 6, height = 3, left = 10, top = 6;
    for (let i = 1; i <= 3; ++i) {
      left = 10;
      for (let j = 1; j <= 3; ++j) {
        canvas = document.createElement('CANVAS')
        canvas.style.width = width + 'cm'
        canvas.style.height = height + 'cm'
        canvas.style.color = 'black'
        canvas.style.border = '2px solid'
        canvas.style.position = 'absolute'
        canvas.style.left = left + 'cm'
        canvas.style.top = top + 'cm'
        canvas.addEventListener('click', function() {
          alert(i + " " + j)
        })
        left += 12
        parentCanvas.appendChild(canvas)
      }
      top += 6
    }
  }
  
  

  

  
  
  

  
}