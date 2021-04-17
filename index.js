const { execFile } = require('child_process');

const questions = [
    {one: "Test Question"},
    {two: 'Second Test Question'}
];
console.log('===================== Questions List ======================= \n');
questions.map(question=> {
    for (const [key, value] of Object.entries(question)) {
        console.log(`    ${key} ====> ${value}`);
      }
});
console.log('============================================================ \n');
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