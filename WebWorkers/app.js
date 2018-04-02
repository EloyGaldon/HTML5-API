
let worker= new Worker('worker.js');

let interacciones=prompt("Dime el número de interaccciones");

let valor=parseInt(interacciones);

let result="";



worker.postMessage(valor);

worker.addEventListener('message', function(e) {

    result= "El resulado del fibonachi de "+interacciones+" interacciones es:\n";
    result+=e.data;

    alert(result);
    document.getElementById('resultado').innerHTML=result;


}, false);

