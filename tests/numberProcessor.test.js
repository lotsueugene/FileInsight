const {sumNum,numMax,numMin,calculateAverage} = require('../src/numberProcessor')

describe('numberProcessor Test', ()=>{
    test('should return sum of numbers in array', ()=>{
        const result =sumNum([1,2,3,4])
        expect(result).toBe(10)
    });

    test('should return maximum number in array', ()=>{
        const result =numMax([1,2,3,4])
        expect(result).toBe(4)
    });

     test('should return maximum number in array', ()=>{
        const result =numMin([1,2,3,4])
        expect(result).toBe(1)
    });

     test('should return average of numbers in array', ()=>{
        const result =calculateAverage([2,4])
        expect(result).toBe(3)
    });
});