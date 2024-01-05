function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
        console.log(descriptor);
    };
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(true)
    greet() {
        return "Hello, " + this.greeting;
    }
}

const objectTest: Greeter = new Greeter("Huy");
console.log(objectTest.greeting);
