negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
function negativePositiveNumbers(array) {

    const result = [];

    for (const element of array) {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }
    console.log(result.join("\n"));
}



function negativePositiveNumbers1(arr) {
    const result = [];
    arr.forEach(num => num < 0 ? result.unshift(num) : result.push(num));
    console.log(result.join("\n"));
}