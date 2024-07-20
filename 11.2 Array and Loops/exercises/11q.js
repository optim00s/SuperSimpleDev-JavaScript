function findIndex(array, word) {
    for(let i = 0; i <= array.length - 1; i++) {
        if(array[i] === word) {
            return console.log(i);
        }
    }

    return console.log(-1);
}

findIndex(['green', 'red', 'blue', 'red'], 'red');
findIndex(['green', 'red', 'blue', 'red'], 'yellow');


