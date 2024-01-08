export class Rectangle{
    length: number = 0;
    width: number = 0;

    constructor(length: number, width: number){
        this.length = length;
        this.width = width;
    }

    getArea(){
        if(this.length <= 0 || this.width <= 0){
            return 0;
        }
        return this.length * this.width;
    }

}