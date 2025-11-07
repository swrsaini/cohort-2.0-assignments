const fs = require('fs');

// fs.readFile('3-read-from-file.md','utf-8',(err,data)=>{

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// fs.writeFile('temp.txt','Hello BRoooo /n',(err)=>{
//     if (err) throw err;
//   console.log('File created and written successfully.');
// })

fs.appendFile('temp.txt','hellloooooooooo \n', (err)=>{
    if (err) throw err;
  console.log('text appended successfully.');
})