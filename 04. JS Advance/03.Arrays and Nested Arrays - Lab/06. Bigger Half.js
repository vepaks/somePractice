biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    let result;
    result = arr.slice(-Math.ceil(arr.length / 2));
    return result;
}

// function biggerHalf1(array) {
//
//     array.sort((a, b) => a - b);
//     const result = array.slice(Math.floor(array.length / 2));
//     return result;
// }
