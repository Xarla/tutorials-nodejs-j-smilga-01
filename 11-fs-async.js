const {readFile, writeFile} = require('fs');
//Need to provide a callback when using async
console.log('start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err) {
            console.log(err)
            return
        }
        console.log(result)
        const first = result;

        writeFile(
            './content/result-async.txt',
            `Hello again, ${first}`,
            (err,result)=>{
            if(err) {
                    console.log(err)
                    return
                }
            console.log('done with this task')
                
        })


})

console.log('starting new task');






/*
readFile('./content/first.txt','utf8',`here is the result: `,(err,result)=>{

    if(err) {
        console.log(err)
    }
    console.log(result)

})

//writeFile('./content/result.sync.txt','utf8',(err,result)=>#)
*/