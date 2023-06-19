function aggregate(input) {

    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    console.log(sum);


    let sumInverse = 0;
    for (let i = 0; i < input.length; i++) {
        sumInverse += 1 / input[i];
    }
    console.log(sumInverse);


    let sumConcat = "";
    for (let i = 0; i < input.length; i++) {
        sumConcat += input[i];
    }
    console.log(sumConcat);
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);