console.log(`\nProblem Statement:
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0
Return an array that includes both values that sums to 0 or undefined, if a pair does not exists`);
console.log(`\nExapmles(Test Data): 
sumZero([-3,-2,-1, 0, 1, 2, 3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
sumZero([-4,-3,-2,-1,0,1,2,3,10]) //[-3,3]
`);

console.log(`\nSolution with Complexity On as no nested loops are used\n`);

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    if(arr.length < 2 ){
        return undefined;
    }
    while(left < right){
        if(arr[left] + arr[right] === 0){
            return [arr[left], arr[right]];
        }else if(arr[left] + arr[right] > 0){
            right -= 1;
        }else{
            left += 1;
        }
    }
}
console.log(sumZero([-3,-2,-1, 0, 1, 2, 3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));
console.log(sumZero([-4,-3,-2,-1, 0, 1,2,3,10]));