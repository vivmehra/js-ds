console.log(`\nProblem Statement:
Given two strings, write a function to determine if the second string is an anagram of thr first.
An ANAGRAM is a word, phrase or name formed by rearranging the letters of another, such as cinema, formwd from iceman.`);
console.log(`\nExapmles(Test Data): 
validAnagram('','' ) // true
validAnagram('aaz',''zza) // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeyrtw') // true
validAnagram('texttwisttime', 'timetwisttesx') // true
`);

console.log(`\nSolution with Complexity On as 2 non nested loops are used\n`);

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    const fq1 = {};
    for(char of str1){
        fq1[char] ?  fq1[char] = fq1[char] +1 : fq1[char] = 1;
    }
    for(char of str2){
        if(!fq1[char]){
            return false;
        }else{
            fq1[char] -= 1;
        }
    }
    return true;
}
console.log(validAnagram('','' ));
console.log(validAnagram('aaz','zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeyrtw'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));