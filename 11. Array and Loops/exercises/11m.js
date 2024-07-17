function minMax(nums) {
    const result = {
        min: null,
        max: null
    };

    for(let i = 0; i <= nums.length - 1; i++) {
        const value = nums[i]

        if (result.max === null || nums[i] < result.min) {
            result.min = nums[i]
        }

        if (result.max === null || nums[i] > result.max) {
            result.max = nums[i];
        }
    }

    console.log(result);
}

minMax([1, -3, 5]); 
minMax([-2, 3, -5, 7, 10]);
minMax([]);
minMax([3]);