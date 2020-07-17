function iniciar(){ 
    document.informacion.addEventListener("invalid", validacion, true); 
    document.getElementById("enviar").addEventListener("click", enviar, false); 
  }

  function validacion(e){ 
    var elemento=e.target; elemento.style.background='#FFDDDD'; 
  } 

  function enviar(){ 
    var valido=document.informacion.checkValidity(); 
    if(valido){ document.informacion.submit(); } 
  } 
  window.addEventListener("load", iniciar, false); 