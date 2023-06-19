squareOfStars(1);
squareOfStars(10);

function squareOfStars(num) {

    for (let i = 0; i < num; i++) {
        let result = '';
        for (let j = 0; j < num; j++) {
            result += '*' + ' ';
        }
        console.log(result);
    }
}