class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() {
        return this._color;
    }
    set color(newcolor) {
        this._color = newcolor;
    }
    getArea(){}
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius ** 2;
    }
    print(){
        return (`Circle (r: ${this.radius}, color: ${this._color})`);
    }
}

class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }
    getArea(){
        return this.side * this.side;
    }
    print(){
        return (`Square (a: ${this.side}, color: ${this._color})`);
    }
}

class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color);
        this.length = length;
        this.width = width;
    }
    getArea(){
        return this.length * this.width;
    }
    print(){
        return (`Rectangle (l: ${this.length}, w: ${this.width}, color: ${this._color})`);
    }
}

class Paint {
    constructor(){
        this.shapes = [];
    }
    addShape(shape) {
        this.shapes.push(shape);
    }
    getShape() {
        return this.shapes;
    }
    
    calculateTotalArea() {
        return this.shapes.reduce((total, shape) => total + shape.getArea(), 0);
    }
    
    getCircles() {
        return this.shapes.filter(shape => shape instanceof Circle);
    }
    
    getSquare() {
        return this.shapes.filter(shape => shape instanceof Square);
    }
    
    getRectangle() {
        return this.shapes.filter(shape => shape instanceof Rectangle);
    }
}

const paintApp = new Paint();
paintApp.addShape(new Circle("red", 5));
paintApp.addShape(new Square("blue", 4));
paintApp.addShape(new Rectangle("green", 4, 5));

console.log("All shapes");
console.log(paintApp.getShape().map(shape => shape.print()));
console.log("/nTotal Area");
console.log(paintApp.calculateTotalArea());
console.log("/nCircles");
console.log(paintApp.getCircles().map(circle = circle => circle.print()));
console.log("/nSquares");
console.log(paintApp.getSquare().map(square = square => square.print()));
console.log("/nRectangle");
console.log(paintApp.getRectangle().map(rectangle = rectangle => rectangle.print()));
