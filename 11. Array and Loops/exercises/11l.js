function minMax(nums) {
    const result = {
        min: nums[i],
        max: nums[i]
    };

    for(let i = 0; i <= nums.length - 1; i++) {
        const value = nums[i]

        if (nums[i] < result.min) {
            result.min = nums[i]
        }

        if (nums[i] > result.max) {
            result.max = nums[i];
        }
    }

    console.log(result);
}

minMax([1, -3, 5]); 
minMax([-2, 3, -5, 7, 10]);