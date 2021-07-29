// class Rectangle {
//     width = 10;
//     height = 20; 

//     constructor(name){
//         this.name = name;
//     }

//     getName(){
//         return this.name;
//     }

//     setWidth(w){
//         this.width = w;
//     }
//     setHeight(h){
//         this.height = h;
//     }
//     calcArea(){
//         this.area = this.width * this.height;
//     }

//     getArea(){
//         this.calcArea();
//         return this.area;
//     }
// }

// const rectOne = new Rectangle("rectangle One");
// console.log(rectOne.name);
// console.log(rectOne.getArea());

// rectOne.setHeight(1000);
// rectOne.setWidth(200);
// console.log(rectOne.getArea());


/////////////////////////////////////////////////////////////////////////////


class Rectangle {
    width = 10;
    height = 20; 

    constructor(name){
        this.nameOfRect = name;
    }

    get name(){
        return this.nameOfRect;
    }

    set width(w){
        this.width = w;
    }
    set height(h){
        this.height = h;
    }
    calcArea(){
        this.area = this.width * this.height;
    }

    getArea(){
        this.calcArea();
        return this.area;
    }

    parentClassMethod(){
        console.log("I am parent Class Method");
        console.log("this >>", this);
        this.childClassMethod();
    }
}

// const rectOne = new Rectangle("rectangle One");
// console.log(rectOne.name);
// console.log(rectOne.getArea());

// rectOne.height = 150;
// rectOne.width = 200;

// console.log(rectOne.getArea());


class Square extends Rectangle {
    constructor(place, name){
        super(name);
        this.natPlace = place;
    }
    
    foo(){
        console.log(" calling super class method from derived class >>", super.getArea()); 
    }

    childClassMethod(){
        console.log("this.natPlace >>", this.natPlace);
    }

}

const sqOne = new Square("Jamkhandi", "SQUARE");
sqOne.height = 30;
sqOne.width = 30;

console.log(sqOne.getArea());
sqOne.foo()
sqOne.parentClassMethod();