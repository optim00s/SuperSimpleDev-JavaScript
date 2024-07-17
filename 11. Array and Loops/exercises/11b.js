const nums = [1, 20, 22, 24, 5];
const strings = ['hi', 'hello', 'good'];

function getLastValue(userArray) {
   const lastIndex = userArray.length - 1;
   
   return console.log(userArray[lastIndex]);
}

getLastValue(nums);
getLastValue(strings);