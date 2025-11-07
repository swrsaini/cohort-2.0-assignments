const fs = require('fs')

let fileData = [];
fs.readFile('temp.txt', 'utf-8', (data,err)=>{
    if(err){
        console.log(err);
    }
    else{
        fileData = data.split(' ');
    }
    
})

const trimmedData = fileData.map((str)=>str.trim()).join(' ');

console.log(trimmedData);

// fs.writeFile('temp.txt', trimmedData, (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(trimmedData)
    

// })