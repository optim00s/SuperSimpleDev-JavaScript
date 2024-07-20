function findIndex(array, word) {
    for(let i = 0; i <= array.length - 1; i++) {
        if(array[i] === word) {
            return i;
        }
    }

    return -1;
}

function unique(array) {
    const result = [];
    for(let i = 0; i <= array.length - 1; i++) {
        if(findIndex(result, `${array[i]}`) === -1) {
            result.push(`${array[i]}`)
        }
    }
    
    return result;
}

// findIndex(['green', 'red', 'blue', 'red'], 'red');
// findIndex(['green', 'red', 'blue', 'red'], 'yellow');
console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));


