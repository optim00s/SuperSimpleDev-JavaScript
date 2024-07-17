function countPositive(nums) {
    const countArray = [];

    for(let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] > 0) {
            countArray.push(nums[i]);
        }
    }

    return countArray.length;

}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

