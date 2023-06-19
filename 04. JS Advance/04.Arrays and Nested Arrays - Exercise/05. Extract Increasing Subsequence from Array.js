function extractIncreasingArray(array){

    let max = array[0];
    let result = [max];

    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (max <= element){
            max = element;
            result.push(element);
        }
    }
    return result;
}



console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
