class Block {
  constructor(x, y = -10, size = 2, speed = 5) {
    this.x = x;
    this.y = y;
    this.width = size;
    this.height = size;
    this.speed = speed;
    this.collisionMask = [];
    this.image = [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
    ];
  }
  
  draw() {
    for(let i = 0; i < this.image.length; i++) {
      for(let j = 0; j < this.image[i].length; j++) {
        if (this.image[i][j] === 1) {
          const fillStyle = ctx.fillStyle;
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(this.x + (this.width * j), this.y +  (this.height * i), this.width, this.height);
          this.collisionMask.push(new Mask(this.x + (this.width * j), this.y +  (this.height * i), this.width, this.height));
          ctx.fillStyle = fillStyle;
        }
      }
    }
  }

  update() {
     if (this.y >= canvas.height + 10) {
           this.y = Math.floor(Math.random() * -100) + 1
           this.x = Math.floor(Math.random() * canvas.width) + 1;
           return 1;
         } 

    this.y += this.speed;
    return 0;    
  }
}