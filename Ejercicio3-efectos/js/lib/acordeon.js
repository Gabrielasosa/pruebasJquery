$(document).ready(function(){
//---------------pruebas
 /*  var ocultar= $('dd');
ocultar.on('mousemove', function(){
    ocultar.togle('normal');
    
})
ocultar.show();
ocultar.hide();
*/
//----------------acordeon infinito
/*var mostrar = $('dd');
var ocultar = $("dd");

$('dt').on('mousemove', function(){
    mostrar.toggle('slow');
})


ocultar.hide();
mostrar.on('mousemove', function(){
    $(this).hide();
    ocultar.show();
   
})

ocultar.on('mousemove', function(){
    $(this).hide();
    mostrar.show();
  
})*/
//--------------acordeon Bueno
$('dt').on('mouseover', function(){
    $(this).next().slideDown('slow');
  }).on('mouseout',function(){
    $(this).next().slideUp('slow');
  })


  //-------------Corregido con jose
  //seleccionemos todos los td mediante el metodo hide
  var dds=$("dd");
  dds.hide();//lo ocultamos
  $("dt").on("mouseenter",function(){
      dds.slideUp(200);//cuando entre el raton me oculte los dd y luego le digo q me muestr los hermanos
      $(this)next()

  })
})//fin de document.ready

