const nums = [1, 20, 22, 24, 5];
const strings = ['hi', 'hello', 'good'];

function arraySwap(userArray) {
    const lastValue = userArray[userArray.length - 1];
    const firstValue = userArray[0];

    userArray[0] = lastValue;
    userArray[userArray.length - 1] = firstValue;

    return console.log(userArray);
}

arraySwap(nums);
arraySwap(strings);