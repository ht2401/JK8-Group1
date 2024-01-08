const logInfoMethod = (target: any, key: string, descriptor: PropertyDescriptor) =>{

    descriptor.value = function(...args: any[]){
        console.log(args);
    }

    console.log(target);
    console.log(key)
;

    return descriptor;
};



class Dog{
    name: string;
    fur: string;

    constructor(name: string, fur: string){
        this.name = name;
        this.fur = fur;
    }

    @logInfoMethod
    barks(tiengsua : string){
        console.log(tiengsua);
    }

}

var dog1 = new Dog("shiba", "vang");
dog1.barks("gogogo");