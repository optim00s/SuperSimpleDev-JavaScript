const nums = [1, 2, 3];
const nums2 = [-2, -1, 0, 99];

function addOne(userArray) {
    for (let i = 0;  i <= userArray.length - 1; i++) {
        userArray[i] += 1;
    }
    
    console.log(userArray);
}

addOne(nums);
addOne(nums2);


