function doSOmething(callback) {
    setTimeout(()=>{
        console.log("Async Operation done.");
        callback();
    }, 2000)
}

function afterAsync(){
    console.log("After async!");
}

doSOmething(afterAsync)