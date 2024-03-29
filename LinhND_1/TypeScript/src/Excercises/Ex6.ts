function logInformation(value: number) {
    return function (target: Rectangle, propertyName: string, descriptor: PropertyDescriptor) {
      const method = descriptor.value;
  
      descriptor.value = function (...args: any[]) {
        console.log(`Logging information: ${value}`);
        const result = method.apply(this, ...args);
        return result + value;
      };
    };
  }

export class Rectangle{
    
    length: number = 0;
    width: number = 0;

    constructor(length: number, width: number){
        this.length = length;
        this.width = width;
    }

    @logInformation(4)
    getWidth(){
        return this.length;
    }

    @logInformation(2)
    getLength(){
        return this.width;
    }

    getPerimeter(){
        if(this.length <= 0 || this.width <= 0){
            return 0;
        }
        return this.length * this.width;
    }

    getArea(){
        if(this.length <= 0 || this.width <= 0){
            return 0;
        }
        return this.length * this.width;
    }

}


const rectangle: Rectangle = new Rectangle(6, 12);

console.log(rectangle.getWidth());
console.log(rectangle.getLength());
console.log(rectangle.getArea());