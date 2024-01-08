import { printColorName } from '../src/Excercises/Ex4';

describe('printColorName', () => {
    it('should return RED', () =>{
        expect(printColorName(0)).toBe("RED");
    })

    it('should return INVALID COLOR', () =>{
        expect(printColorName(7)).toBe("INVALID COLOR");
    })
    
});