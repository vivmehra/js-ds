console.log(`\nProblem Statement:
Write a function called "same" which accepts two arrays and the function should return true
if every value in the array has its corresponding value squared. In the second array`);
console.log(`\nExapmles(Test Data): 
same([1,2,3,2],[4,1,9,4] ) // true
same([1,2,3],[1,9]) // false
same([1,2,1,3],[4,4,1,9]) // false
`);

console.log(`\nSolution with Complexity On as 3 non nested loops are used\n`);

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let fq1 = {};
    let fq2 = {};
    for(num of arr1){
        fq1[num] ? fq1[num] = fq1[num] + 1 : fq1[num] = 1;
    }
    for(num of arr2){
        fq2[num] ? fq2[num] = fq2[num] + 1 : fq2[num] = 1;
    }
    // console.log('fq1', fq1);
    // console.log('fq2', fq2);
    for(key in fq1){
        if(!(key**2 in fq2)){
            return false;
        }
        if (fq1[key] !== fq2[key**2]){
            return false;
        }
    }
    return true;
}
console.log(same([1,2,3,2],[4,1,9,4]));
console.log(same([1,2,3],[1,9]));
console.log(same([1,2,1,3],[4,4,1,9]));