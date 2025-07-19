class Button {
    constructor(x, y, width, height, text) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
    } 

    draw() {
        const defaultFillStyle = ctx.fillStyle;
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.font='20px serif'
        ctx.fillStyle='white';
        ctx.fillText('Replay', this.x + 20, this.y + 20, this.width, this.height - 10);
        ctx.fillStyle=defaultFillStyle;
    }
}