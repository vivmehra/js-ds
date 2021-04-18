console.log(`\nProblem Statement:
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0
Return an array that includes both values that sums to 0 or undefined, if a pair does not exists`);
console.log(`\nExapmles(Test Data): 
sumZero([-3,-2,-1, 0, 1, 2, 3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
`);

console.log(`\nSolution with Complexity On2 as nested loops are used\n`);

function sumZero(arr){
    if(arr.length < 2 ){
        return undefined;
    }
    for(var i = 0; i < arr.length; i++){
        for(var j = i +1 ; j< arr.length; j++){
            if(arr[i] + arr[j] == 0)
                return [arr[i], arr[j]];
        }
    }
    return undefined;
}
console.log(sumZero([-3,-2,-1, 0, 1, 2, 3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));