function removeEgg(foods) {
    /*
        foods arrayinin, dəyərlərinin kopyasını
        reversedFoodsa təyin edərək, referansları 
        fərqləndiririk
    */ 
    //method chaining technique
    const reversedFoods = foods.slice().reverse();
    const modifedArray = [];
    let removedEgg = 0;
    for(let i = 0; i <= reversedFoods.length - 1; i++) {
        if(reversedFoods[i] === 'egg' && removedEgg !== 2) {
            removedEgg++;
            continue;
        } 
        modifedArray.push(reversedFoods[i]);
    }

    return modifedArray.reverse();
}


console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
