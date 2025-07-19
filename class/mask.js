class Mask {
  constructor(x,y,width,height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
  }
  
  isColliding(object) {
      if (
        this.x <= object.x + object.width && 
        this.x + this.width >= object.x && //Horrizontal collision
        this.y <= object.y + object.height && 
        this.y + this.height >= object.y //vertical collision
      ) {
        return true;
    }
    return false;
  }
}