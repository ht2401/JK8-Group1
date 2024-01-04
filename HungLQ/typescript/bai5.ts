class Retangle {
    height:number
    width:number

    constructor(height:number,width:number){
        this.height = height;
        this.width = width;
    }

    getArea():number{
        return this.height* this.width;
    }
}

let square = new Retangle(4,4);
console.log(square.getArea())