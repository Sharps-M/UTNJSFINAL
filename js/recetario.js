/*
/////

Ejercicio2:
Armar un recetario para una ensalada

👉 Crear una variable por cada ingrediente de la lista
        (ej: declaran una variable que se llama zanahoria)
* Guardar cada valor de tipo "string" en su respectiva variable
    
👉 Crear una variable que se llame ingredientes
* Guardar en ella toda la suma de las variables de nuestras verduras juntas
* Luego de cada verdura deberán sumar un salto de línea para que cada verdura ocupe un renglón


👉 Utilizar el método document.write() para escribir en la pantalla del index.html
la lista de ingredientes.
* Les debería figurar de la siguiente manera:

Ingredientes =
🥕Zanahoria: 200gr
🍅Tomate: 400gr
🥦Brocoli: 200gr
🥑Aguacate 300gr

/////
*/

var vIngrediente1;
var vIngrediente2;
var vIngrediente3;
var vIngrediente4;
    
        vIngrediente1=prompt("Ingrese la cantidad de zanahoria, indicando Zanahoria y la cantidad en gramos");
        vIngrediente2=prompt("Ingrese la cantidad de tomate, indicando Tomate y la cantidad en gramos");
        vIngrediente3=prompt("Ingrese la cantidad de brocoli, indicando Brocoli y la cantidad en gramos");
        vIngrediente4=prompt("ingrese la cantidad de Aguacate, Indicando aguacate y la cantidad en gramos");

//var ensalada="Ingredientes"+vIngrediente1+vIngrediente2+vIngrediente3+vIngrediente4;

var ensalada = vIngrediente1+ '<br>' +vIngrediente2+ '<br>' +vIngrediente3+ '<br>' +vIngrediente4;

document.write("Ingredientes:<br>"+ensalada);

