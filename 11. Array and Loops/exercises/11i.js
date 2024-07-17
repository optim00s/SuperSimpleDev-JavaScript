function addNum(userArray, num) {
    for (let i = 0;  i <= userArray.length - 1; i++) {
        userArray[i] += num;
    }
    
    return console.log(userArray);
}

addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-2, -1, 0, 99], 2);