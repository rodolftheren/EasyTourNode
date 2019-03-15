/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function ocultarElementos(){
    
    var height = window.innerHeight+'px';
    
    /*document.getElementById('background').style.whidth = screen.width;
    document.getElementById('background').style.height = screen.height;*/
    
    var ventana = document.getElementById('modal').style.display = 'none';
        
};

$(document).ready(function(){
        
    $('#opcionTurista').on('click', function(){
        
       $('#opcionTurista').css("background", "white"); 
       $('#opcionTurista').css("color", "#17CA94"); 
       $('#opcionTurista').css("border-color", "#17CA94");
       
       $('#opcionGuia').css("background", "rgba(0,0,0,0)"); 
       $('#opcionGuia').css("color", "white"); 
       $('#opcionGuia').css("border-color", "white");
       
       $('.turista').css("display", "flex");
       $('.guia').css("display", "none");
       
    });
    
    $('#opcionGuia').on('click', function(){
        
       $('#opcionGuia').css("background", "white"); 
       $('#opcionGuia').css("color", "#17CA94"); 
       $('#opcionGuia').css("border-color", "#17CA94");
       
       $('#opcionTurista').css("background", "rgba(0,0,0,0)"); 
       $('#opcionTurista').css("color", "white"); 
       $('#opcionTurista').css("border-color", "white");
       
       $('.turista').css("display", "none");
       $('.guia').css("display", "flex");
       
    });
    
    $(document).on('click', '#registrarse', function(){
    
        $('.modal').css("display", "flex");
        $('.info').css("display", "none");
        $('#opcionTurista').css("background", "white"); 
        $('#opcionTurista').css("color", "#17CA94"); 
        $('#opcionTurista').css("border-color", "#17CA94");
        $('.guia').css("display", "none");
        //var ventana = document.getElementById('modal').style.display = 'flex';
        //var ventana = document.getElementById('info').style.display = 'none';
    
    });
    
});

