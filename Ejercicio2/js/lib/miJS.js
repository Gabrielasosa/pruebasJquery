$(document).ready(function(){
   /*//mouse on este puede ser solo de entrada o solo de salida o ambas
    var caja =$('#caja');//creo la variable caja
    caja.on('mouseover', function(){//le digo q al posicionar el raton encima cambie de color
        $(this).css('background-color', 'red')
    }).on('mouseout',function(){
        $(this).css('background-color', 'white')//le digo que al salir el raton del elemento no ponga de color el elemento
    })*/

    //eventp hover, este siempre es de entrada y salida
   /* var caja =$('#caja');//creo la variable caja
    function cambiaRojo(){
        $(this).css('background-color', 'red')
    }
    function cambiaAzul(){
        $(this).css('background-color', 'blue')
    }
    caja.hover(cambiaRojo,cambiaAzul);//de esta manera invocamos a la funcion en el evento hover
    
    */
    
    //evento click y doble click
    //  var imagen = $('img');
    //     imagen.on('click', function () {
    //     $(this).attr('src', 'img/Vegeta.png');
    // })
    //otra manera de hacerlo mas continuado como la caja
    /*var imagen =$('[src="img/goku.jpg"]');
    function cambiaVeg(){
        $(this).attr('src','img/Vegeta.png')
    }
    function cambiaGoku(){
        $(this).attr('src','img/goku.jpg')
    }
    imagen.hover(cambiaVeg,cambiaGoku);*/

    //boton 
   /* var boton= $('#button');
    var imagen =$('img');
    boton.on('click', function () {//cambiamos la imagen al pulsar el boton
        imagen.attr('src', 'img/Vegeta.png');
    })
   
    //focus y burl
    var cajatexto = $('#nombresito');
    var texto = "";
    cajatexto.on('focus', function(){
     texto = $(this).val();//el .val recoge el texto del imput
        console.log(texto);
    });
    //
    cajatexto.on('blur', function () {
        if ($(this).val() == "") {
            $(this).val('El campo no puede estar vacío');
        }
    });
*/
//mousedown y mouseup 
//var caja =$('#caja');//creo la variable caja
/*caja.on('mousedown', function(){
    $(this).css('border-color', 'blue');
});

caja.on('mouseup',function(){
    $(this).css('border-color', 'green');
});*/


//ejercicio propuesto
/*var imagen =$('img');
imagen.on('mousedown', function(){
    imagen.attr('src', 'img/Vegeta.png');
});

imagen.on('mouseup',function(){
    imagen.attr('src', 'img/goku.jpg');
});
*/
//mouse move 
var caja = $('#caja');
/*caja.on('mousemove', function(){
    console.log('me estoy moviendo');
 })*/
//al mover el raton nos sigue
 $(document).on('mousemove', function(){
    caja.css('left', event.clientX).css('top', event.clientY);
})

})//fin de document.ready

