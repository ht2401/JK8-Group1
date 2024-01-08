class Retangle {
    height:number
    width:number

    constructor(height:number,width:number){
        this.height = height;
        this.width = width;
    }


    getArea(num?:number, int?:number):number | undefined{
        if(num && int) return 1;
        return this.height* this.width;
        if(num && int) return 1;
    }
}

let square = new Retangle(4,4);
console.log(square.getArea(1,2))