
function validarletynum(e){
  var teclad =(document.all) ? e.keyCode: e.which;
  if(teclad===8) return true;
  var patron = /[a-zA-Z0-9]/;
  tec=String.fromCharCode(teclad);
  return patron.test(tec);            
}//solo letras y numeros

function validarlet(e){
  var teclad =(document.all) ? e.keyCode: e.which;
  if(teclad===8) return true;
  var patron = /[a-zA-ZnÑ]/;
  tec=String.fromCharCode(teclad);
  return patron.test(tec);            
}//solo para letras

function validarcorreo(e){
  var teclad =(document.all) ? e.keyCode: e.which;
  if(teclad===8) return true;
  var patron = /[a-zA-Z0-9@.-_--]/;
  tec=String.fromCharCode(teclad);
  return patron.test(tec); 
  
    
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Micreosoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementByName("").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "consulta.jsp?cor");
    xmlhttp.send();
    
  
  
  
}//validación para correos

function validarcomen(e){
  var teclad =(document.all) ? e.keyCode: e.which;
  if(teclad===8) return true;
  var patron = /[a-zA-Z0-9@. ]/;
  tec=String.fromCharCode(teclad);
  return patron.test(tec);            
}//valida comentarios

function validarnum(e){
  var teclad =(document.all) ? e.keyCode: e.which;
  if(teclad===8) return true;
  var patron = /[0-9]/;
  tec=String.fromCharCode(teclad);
  return patron.test(tec);            
}//valida numeros


function validarcorreo2(e){
  var teclad =(document.all) ? e.keyCode: e.which;
  if(teclad===8) return true;
  var patron = /[a-zA-Z0-9@.-_--]/;
  tec=String.fromCharCode(teclad);
  return patron.test(tec);  
    
    var xmlhttp;
    
    var cor = document.getElementByName("Correo_Turista").value;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Micreosoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById("res").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "Registro.jsp?corres="+cor+"");
    xmlhttp.send();
    
  
  
  
}//validación para correos