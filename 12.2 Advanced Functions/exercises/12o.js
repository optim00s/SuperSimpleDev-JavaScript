function removeEgg(foods) {
    let removedEggs = 0;

    return foods.filter((value) => {

        if (value === 'egg' && removedEggs < 2) {
            removedEggs++;
            return false;
        }

        return true;
    });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
