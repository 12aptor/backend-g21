function hola(nombre,primercallback){
    setTimeout(function(){
        console.log('Hola ' + nombre)
        primercallback(nombre)
    },1000)
}

hola('César',function(nombre){
    console.log('adios ' + nombre)
})