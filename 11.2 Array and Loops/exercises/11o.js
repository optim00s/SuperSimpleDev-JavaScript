function checkString(strings) {
    for(let i = 0; i <= strings.length - 1; i++) {
        if(strings[i] === 'search') {
            return console.log(i);
        }
    }

    return console.log(-1);
}

checkString(['hello', 'world', 'search', 'good']);
checkString(['not', 'found']);