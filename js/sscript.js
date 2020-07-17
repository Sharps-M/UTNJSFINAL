var vLetras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];
  var vNumero = parseInt(prompt("Por favor Ingrese un numero entre 0 y 25"));
  
  if (vNumero >= 0 && vNumero <= 25) {
    var vLetra2 = prompt("Por Favor Ingrese una Letra");

    if (vLetras[vNumero] == vLetra2.toUpperCase()) {
      document.write('WINNER WINNER!');
    } else {
      document.write('El Numero y la Letra Porporcionadas no Coinciden Dentro del array, Intente de vuelta');
    }
  } else {
    window.alert("El número proporcionado no es válido");
    //document.write('Por favor ingrese un numero valido entre 0 y 25');
  }