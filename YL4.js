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

const shapes = [new Circle(5), new Square(4), new Rectangle(4, 6)];
console.log()

/*class Shape {
    constructor(name) {
        if (new.target === Shape) {
            throw new Error('Cannot instantiate abstract class')
        }
        this.name = name;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle')
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle')
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => {
    console.log(`${shape.name} Area: ${shape.area()}`);
}) */