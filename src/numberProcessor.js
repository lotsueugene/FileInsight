const fs = require('fs');


const numText = fs.readFileSync('./data/sample-numbers.txt', 'utf8');

const numLines = numText.split('\n')
const numArr = [];

for (let i=0;i < numLines.length; i++){
    const line = numLines[i].trim();
    if (line.length > 0){
        numArr.push(parseFloat(line));
    }
};




function sumNum(numArr){
    let add=0;
    for (let i=0; i < numArr.length; i++){
        add+=numArr[i];
    }
    return add;
};


function numMax(numArr){
    let max=numArr[0]
    for (let i = 0; i < numArr.length; i++){
        if (numArr[i]>max){
            max=numArr[i];
        };
    }
    return max;
};

function numMin(numArr){
    let min =numArr[0];
    for (let i = 0; i < numArr.length; i++){
        if(numArr[i] < min){
            min =numArr[i];
        };
    }
    return min;
};


function calculateAverage(numArr) {
    const total = sumNum(numArr)
    return total / numArr.length;
};


module.exports = {sumNum,numMax,numMin,calculateAverage};


console.log(numArr)
console.log(`Sum: ${sumNum(numArr)}`)
console.log(`Max: ${numMax(numArr)}`)
console.log(`Min: ${numMin(numArr)}`)
console.log(`Average: ${calculateAverage(numArr)}`)