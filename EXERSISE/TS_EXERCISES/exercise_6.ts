// Định nghĩa decorator
const logMethodCall = (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = (...args: any[]) => {
        // Lấy tên phương thức và tên lớp
        const methodName = key;
        const className = target.constructor.name;

        // Log thông tin
        console.log(`Calling ${className}.${methodName} with arguments [${args}]`);

        // Gọi phương thức thực tế
        const result = originalMethod

        // Log kết quả
        console.log(`${className}.${methodName} returned ${result}`);

        return result;
    };

    return descriptor;
}

// Sử dụng decorator trên một lớp
class ExampleClass {
    @logMethodCall
    exampleMethod(x: number, y: number): number {
        return x + y;
    }

    @logMethodCall
    helloMethod(name: string) {
        return `Hello ${name}`;
    }
}

// Sử dụng lớp với phương thức đã được decoracted
const obj = new ExampleClass();
obj.exampleMethod(2, 3);
obj.helloMethod("Huy");