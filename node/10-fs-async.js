const { readFile, writeFile} = require('fs');

console.log('start');

readFile('./node/content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./node/content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./node/content/test.txt',
        `Result
        ${first}
        ${second}`,
        (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("Task done, starting next one");
        })
    })
})

console.log("Starting new task");