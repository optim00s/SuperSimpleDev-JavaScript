function countPositive(nums) {
    const holder = [];

    nums.forEach((value) => {
        if ( value > 0 ) {
           holder.push(value); 
        }
    });

    return holder.length;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
