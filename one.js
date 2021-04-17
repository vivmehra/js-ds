console.log(`\nProblem Statement:
Write a function called "same" which accepts two arrays and the function should return true
if every value in the array has its corresponding value squared. In the second array`);
console.log(`\nExapmles(Test Data): 
same([1,2,3],[4,1,9] ) // true
same([1,2,3],[1,9]) // false
same([1,2,1],[4,4,1]) // false
`);

console.log(`\nSolution with Complexity On^2 as 2 loops are used\n`);
function same(arr1, arr2) {
    if(arr1.length != arr2.length){
        return false;
    }
    for(num of arr1){
        let index = arr2.indexOf(num**2);
        if(index == -1)
            return false;
        arr2.splice(index,1);
    }   
    return true;
};

console.log(same([1,2,3],[4,1,9]));
console.log(same([1,2,3],[1,9]));
console.log(same([1,2,1],[4,4,1]));