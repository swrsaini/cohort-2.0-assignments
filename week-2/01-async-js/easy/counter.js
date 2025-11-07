let count = 0;
// setInterval(()=>console.log(++count),1000);

function increaseCounter(){
    setTimeout(()=>{
        console.log(++count);
        increaseCounter();
    },1000)
}

increaseCounter();
