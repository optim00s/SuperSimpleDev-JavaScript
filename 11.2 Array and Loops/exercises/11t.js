function removeEgg(foods) {
    foods.reverse();
    const modifedArray = [];
    let removedEgg = 0;
    for(let i = 0; i <= foods.length - 1; i++) {
        if(foods[i] === 'egg' && removedEgg !== 2) {
            removedEgg++;
            continue;
        } 
        modifedArray.push(foods[i]);
    }

    return modifedArray.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
