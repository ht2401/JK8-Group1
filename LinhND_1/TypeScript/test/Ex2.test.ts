import {printPersonInfo} from "../src/Excercises/Ex2";
import {Person} from "../src/Excercises/Ex2";

describe('printPersonInfo', () => {
    it('should return persons information', () => {
        let person: Person = new Person("Nguyen Duy Linh", 24, "linh@gmail.com");
        expect(printPersonInfo(person)).toBe("Name: Nguyen Duy Linh\nAge: 24\nEmail: linh@gmail.com");
        
    })
})