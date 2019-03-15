/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $('#imagen img:gt(0)').hide();
    setInterval(function(){
        $('#imagen img:first-child').fadeOut(1000).next('img').fadeIn(0).end().appendTo('#imagen');          
    },3000);
});
