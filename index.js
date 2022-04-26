function startGame() {
  createTable()

  function createTable() {
    let gameTable = document.getElementById('gameTable')
    let ctx = gameTable.getContext('2d')

    let widthBeginn = 250, heightBeginn = 170, widthLength = 190, heightLength = 15;
    for (let i = 0; i < 3; ++i) {
      heightBeginn = 170;
      
      for (let j = 0; j < 3; ++j) {
        
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "black";
        ctx.rect(widthBeginn, heightBeginn, widthLength, heightLength);
        ctx.stroke();
        heightBeginn += 190;
      }
      widthBeginn += 400;
    }
  }
  
  

  
}