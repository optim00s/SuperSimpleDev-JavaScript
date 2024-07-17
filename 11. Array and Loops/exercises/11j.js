function addArrays(array1, array2) {
    const sumArray = [];

    for(let i = 0; i <= array1.length - 1; i++) {
        sumArray[i] = array1[i] + array2[i];
    } 

    console.log(sumArray);
}

addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);