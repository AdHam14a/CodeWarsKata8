function squareOrSquareRoot(array) {
    let square = [];
    for (let i = 0; i < array.length; i++){
        if (Number.isInteger(Math.sqrt(array[i]))) {
            square.push(Math.sqrt(array[i]));
        }
        else {
            square.push(array[i] * array[i]);
        }
    }
    return square;
}

console.log(squareOrSquareRoot([1,2,3,4,5,6,7,8,9]));
