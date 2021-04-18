const { execFile } = require('child_process');

const questionsFreqCounter = [
    {one: "Same(On2): 2 arrays, second contains square of each element in fisrt array, same number of times"},
    {two: "Same(On): 2 arrays, second contains square of each element in fisrt array, same number of times"},
    {three: "Anagram(On) with 3 loops"},
    {four: "Anagram(On) with 2 loops"},
];
const questionsMultiplePointer = [
    {five:"sumZero(On2): Fisrt pair which sums to 0 in a sorted array"},
    {six:"sumZero(On): Fisrt pair which sums to 0 in a sorted array"}
];

console.log('===================== Questions List Frequency Counter Pattern ======================= \n');
questionsFreqCounter.map(question=> {
    for (const [key, value] of Object.entries(question)) {
        console.log(`    ${key} ====> ${value}`);
      }
});
console.log('====================================================================================== \n');

console.log('===================== Questions List Multiple Pointers Pattern ======================= \n');
questionsMultiplePointer.map(question=> {
    for (const [key, value] of Object.entries(question)) {
        console.log(`    ${key} ====> ${value}`);
      }
});
console.log('====================================================================================== \n');

const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

async function main(){
    const ans = await askQuestion("\n \n Type the question number you want to run: ");
    console.log('You selected:', ans);
    const child = execFile('node', [`${ans}.js`], (error, stdout, stderr) => {
        if (error) {
          throw error;
        }
        console.log(stdout);
      });
}

main();