console.log("INICIO")
let i = 0
let id = setInterval(function(){
    i++
    if(i === 5){
        clearInterval(id)
    }
    console.log("PASO " + i)
},1000)
console.log("FIN")