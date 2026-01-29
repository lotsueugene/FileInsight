const fs = require('fs');

function readText(filePath){
    try{
        const content = fs.readFileSync(filePath, 'utf8');
        return content;
    } catch(error){
        console.log(error.message);
        return null;
    }
}


function countText(text){
 if (!text) return 0;
    const cleanedText = text.replace(/[\n.]/g,' ')
    const words = cleanedText.trim().split(/\s+/);
    return words.length;
}


function longestWord(text){
    const cleanedText = text.replace(/[\n.,]/g,' ')
    const words = cleanedText.trim().split(/\s+/);
    let longest=''
    let longestWord=[]
    for (let i=0; i<words.length;i++){
        if(words[i].length>longest.length){
            longest=words[i]
            longestWord=[longest]
        } else if (words[i].length===longest.length){
            longestWord.push(words[i])
        }
    }
    return longestWord;
}

function fileLines(text){
    const lines = text.trim().split('\n');
    return lines.length;
}


module.exports = {countText,longestWord,fileLines};




const quotes = readText('./data/quotes.txt');
const sample_text= readText('./data/sample-text.txt')



console.log(countText(sample_text))
console.log(longestWord(sample_text))
console.log(fileLines(sample_text))

console.log(countText(quotes))
console.log(longestWord(quotes))
console.log(fileLines(quotes))