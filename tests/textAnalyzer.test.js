const {countText,longestWord,fileLines} = require('../src/textAnalyzer.js')


describe("textAnakyzer Test", ()=>{
    test('should count words in simple text',() =>{
        const result = countText('Hello world test');
        expect(result).toBe(3)
    });

    test('should return single longest word', () =>{
        const result =longestWord('I love programming');
        expect(result).toEqual(['programming'])
    });

     test('should return multiple longest words if there is a tie', () =>{
        const result =longestWord('cats dogs');
        expect(result).toEqual(['cats','dogs']);
    });

    test('should count lines in a simple text', () => {
        const text = `Backend development is the foundation of modern web applications.
                      While frontend developers focus on what users see`;
  const result = fileLines(text);
  expect(result).toBe(2);
});

});