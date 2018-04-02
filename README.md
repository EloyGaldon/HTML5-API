<h2>Actvidades para practicar las API de HTML5</h2>
<p>Actividades Html5</p>

<h3>Utilización de WebStorage</h3>

<p>Crea una aplicacion TO-DO en el que dispongamos de una ventana con un TextBox donde iremos añadiendo nuestras tareas ha realizar y un botón para añadirlas. Debajo de la misma aparecera el listado de las tareas añadidas, similar al comportamiento que se puede ver en ToDo. Condiciones que debe de cumplir.</p>

<ul>
	<li>Las tareas deben almacenarse en el localStorage.</li>
	<li>Para almacenar se debe cuantificar las existentes en el localStorage y sumarle una para establecer en el par que se almacena en el localstorage la key de ellas. Por ejemplo si existen dos ya la siguiente se almacenará de la siguiente forma: { '3','[Tarea ha realizar]'}</li>
	<li>Se creará un botón de borrado de todas a la vez.</li>
	<li>Se comprobará que no existe nada más almacenado en el localstorage la primera vez que se ejecuta la aplicación. en el caso de existir deberá lanzarse un mensaje que pregunte si quiere eliminarlo, de esta manera nos aseguramos de que en la primera ejecución no hay nada que ensuce la aplicación.</li>
	<li>Se debe utiliza BootStrap y Jquery para la ejecución de la actividad.</li>
</ul>


<h3>Utilización de WebWorkers</h3>
<p>Crea una aplicación para calcular una serie de Fibonacci a partir de un WebWorker, para ello le pediremos el número de iteraciones y el resultado será presentado en pantalla, el algoritmo utilizado:</p>

<p>function calcularFibonacci(valor)</p>
<p>{</p>
<p>	var i,</p> 
<p>	fibo = 1,</p> 
<p>	fibo2 = 1,</p> 
<p>	for(i = 0; i < valor; i++) { </p> 
<p>     fibo = fibo + fibo2;</p> 
<p>     fibo2 = fibo - fibo2;</p> 
<p>     return fibo;</p> 
<p>     }</p>
<p>}</p>

<p>El webWorker devolverá un array que presentará en pantalla dando la relación</p>
