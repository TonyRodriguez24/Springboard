class RightTriangle extends Triangle {
    constructor(a, b, c) {
        if((a * a) + (b *b) === c * c){
            throw new Error("Invalid C side for right triangle")
        }
        super(a,b,c);

        this.a = a;
        this.b = b;
        this.c = c;
    }
    display() {
        console.log(`triangle with sides of ${this.a}, ${this.b}, ${this.c}`)
    }
    getArea() {
        const { a, b, c } = this;
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c))
    }
    isBig() {
        return this.getArea() > 50;
    }
}


const firstTri = new Triangle(2, 4, 5);

//adding constructors
//can validate data in constructor

console.log(firstTri.isBig())
