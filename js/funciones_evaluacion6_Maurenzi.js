/*
Crear un archivo funciones_evaluacion6_apellido.js y asociarlo al archivo .html
En el archivo .js
Declarar una función que le pida al usuario ingresar un número (pueden utilizar prompt).
Calcular el iva (21%) del número ingresado. 
Luego mostrar en pantalla el valor total con y sin el iva.
La función debe ejecutarse desde el botón "Calcular IVA" en el archivo .html
*/

function calculariva(){

	var vMonto= prompt('ingresa un Monto a calcular IVA', '');

	var vFinal;

	if(isNaN(vMonto)|| vMonto==null || vMonto.trim=="" || vMonto==0){
	
	document.getElementById('error').innerHTML = "Ingrese un valor numerico valido";
	//document.write("Ingrese un valor numerico valido");
}

	else{

    vFinal=21*vMonto/100;
  
    var vTotal = Number(vFinal)+Number(vMonto);

	//document.write('Su monto inicial es de: ' +vMonto+ '<br>'+' El iva Total es de: ' +vFinal+'<br>'+ 'Totalizando la suma de:'+vTotal);}
	document.getElementById('error').innerHTML = 'Su monto inicial es de: ' +vMonto+ '<br>'+' El iva Total es de: ' +vFinal+'<br>'+ 'Totalizando la suma de:'+vTotal;

}}