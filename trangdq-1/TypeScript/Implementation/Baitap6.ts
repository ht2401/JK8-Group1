// Bài 6: Viết một decorator để log thông tin mỗi khi một phương thức của một lớp được gọi.

class Square {
    edge: number;

    constructor(edge: number) {
        this.edge = edge;
        this.printInfo = this.printInfo.bind(this); // Correctly bind `this` to `printInfo`
    }

    @log()
    calcArea(): number {
        return this.edge * this.edge;
    }

    @log()
    calcPerimeter(): number {
        return this.edge * 4;
    }

    @log()
    printInfo(vnese: boolean): void {
        if (vnese) {
            console.log(`Hình vuông cạnh ${this.edge}cm có chu vi ${this.calcPerimeter()}cm và diện tích ${this.calcArea()}cm2`);
        } else {
            console.log(`The square with the edge of ${this.edge}cm have the perimeter = ${this.calcPerimeter()}cm and the area = ${this.calcArea()}cm2`);

        }
    }
}

// function log<T>(): Function {
//     return function (...params: T[]): T {
//         const name = method.name;
//         const parameters = params.join(", ");
//         const values = params.map((param) => JSON.stringify(param)).join(", "); // Use `map` and `JSON.stringify` for accurate value representation
//         console.log(`Gọi method ${name}: ${parameters}, ${values}`);
//         return method(...params);
//     };
// }

function log() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any) {
            const parameters = args.join()
            console.log(`Gọi method ${propertyKey}(). Input: {${parameters}}`);
            return originalMethod.apply(this, args);
        }
    }
}



const square: Square = new Square(5);
console.log(square.calcArea());
console.log(square.calcPerimeter());
square.printInfo(true);
