//var vVector = ['velas', 10, [200,true,'apuntes']];
			
//			var vPrimerElemento = vVector[0];
//			var vSegundoElemnto = vVector[1];
//			//El tercer elemento es un vector en si
//			var vTercerElemnto 	= vVector[2];
//			
//			document.write(vPrimerElemento + "<br>");
//			document.write(vSegundoElemnto + "<br>");
//			//Mostrar los elementos del vector dentro de un vector
//			document.write(vTercerElemnto[0] + "<br>");
//			document.write(vTercerElemnto[1] + "<br>");
//			document.write(vTercerElemnto[2] + "<br>");
//			//Accediendo directamente
//			document.write(vVector[2][0] + "<br>");
//			document.write(vVector[2][1] + "<br>");
//			document.write(vVector[2][2] + "<br>");


var vNumero1 = 5;
var vNumero2 = 10;

var resultado = vNumero1+vNumero2;
var resultado2 = vNumero1-vNumero2;
var resultado3 = vNumero1*vNumero2;
var resultado4 = vNumero1/vNumero2;

document.write("Ejemplo Suma:"+"<br>"+resultado+'<br>');

document.write("Ejemplo Resta:"+"<br>"+resultado2+'<br>');

document.write("Ejemplo Multiplicacion:"+"<br>"+resultado3+'<br>');

document.write("Ejemplo Division:"+"<br>"+resultado4+'<br>');

var vGoodmovies = ["Figth Club", "Casino", "Stranger Than Fiction", "Army Of Darkness", "The Big Lebowski"];


var vSort		= vGoodmovies.sort();
				document.write('Peliculas Recomendables: '+'<br>' + vGoodmovies.toString() + '<br>');

