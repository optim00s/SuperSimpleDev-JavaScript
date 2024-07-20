function removeEgg(foods) {
    const modifedArray = [];
    for(let i = 0; i <= foods.length - 1; i++) {
        if(foods[i] === 'egg') {
            continue;
        } 
        modifedArray.push(foods[i]);
    }

    return modifedArray;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
