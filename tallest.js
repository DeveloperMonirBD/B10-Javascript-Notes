//Maximum Height:-
let heights = [65, 66, 68, 72, 78, 60, 66];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('Max value is: ' + max);


//Minimum Height:-
function getMin(numbers) {
    let min = numbers[0];

    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const min = getMin(heights);
console.log('Min value is: ' + min);
