//Guardamos login en localStorage
var array=[];


$(document).ready(function() {
    
var contador=localStorage.length;

 if (contador>0) {
        var reset = prompt("Desea vacial los datos", "Pulse cancelar para NO");

        if (reset == "Pulse cancelar para NO") {
            localStorage.clear();
        }
        else{
            for(var x=0;x<localStorage.length;x++){
                let texto = localStorage.getItem(x+1);
                 if (texto != null)
                document.getElementById("resultado").innerHTML += "<li>"+texto+"</li>";
            }
        }
    }

}); 
      



$('#guardar').click(function () {
    var tarea=$('#tarea').val();
    var indicador=array.length;
    array[indicador]=tarea;
    id=indicador+1;
    localStorage.setItem(id,tarea);
    document.getElementById("resultado").innerHTML += "<li>"+array[id-1]+"</li>";
    id++;
})
function borrar() {
    localStorage.clear();
}

