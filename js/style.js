document.body.style.backgroundColor = "#fcf79f";

const elems = document.getElementsByClassName('pp')
for (let i = 0; i < elems.length; i++) {
elems[i].style.backgroundColor = '#0ca001'
}

document.getElementById("destacado").style.fontSize = "24px";

const tit = document.getElementsByClassName('tt')
for (let i = 0; i < tit.length; i++) {
tit[i].style.fontFamily = 'Arial'
}

//var vVinculo  = document.getElementById('vinculo');
//document.write("La direccion a Lorem Ipsum es: " + vVinculo.href+'<br>');

        var vVinculo = document.createElement("a");

		var vContenido = document.createTextNode("https://www.lipsum.com");

		vVinculo.appendChild(vContenido);

		document.body.appendChild(vVinculo);