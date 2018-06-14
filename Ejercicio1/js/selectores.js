$(document).ready(function () //lo utilizamos para que cuando el documento este cargado, ponga lo que definimos dentro de la funcion
{
    //Seleccionar todos los elementos li y cambiar el tamaño de letra a 10px.
    $('li').css('font-size', '10px');
    //Seleccionar el elemento con id Elemento1 y poner el color de letra en verde.
    $('#Elemento1').css('color', 'green');
    //Seleccionar los elementos con clase rojo y añadirles una clase azul que cambie el color de letra a azul. Antes se debe remover la clase rojo.
    //$('.rojo').removeClass('rojo'); porq siempre afecta al resto??
    $('.rojo').addClass('azul');
    $('.rojo').removeClass('rojo')
    //Seleccionar los hijos pares y darles un border: 1px solid black
    $('li:nth-child(even)').css("border", "1px solid black");
    //Seleccionar los hijos impartes y darles un border 1px dashed blue.
    $('#enl li:nth-child(odd)').css('border', '1px dashed blue');
    //Seleccionar el hijo numero 3 y darle un margin bottom de 30px.
    $('#enl li:nth-child(3)').css('margin-bottom', '80px');

    //Seleccionar el primer enlace por atributo href y cambiar el color del enlace
    $('[href="https://www.google.com"]').css('color', 'blueviolet');
    //Seleccionar el segundo enlace por atributo title y cambiar el tamaño de letra del enlace. 
    var titulo = $('[title="Codespace"]');
    titulo.css('font-size', '15px');
    //******************* ejercicio1--- parte2*************
    //Posicionados en el ul cambiar el tamaño de letra del parrafo 1.
    //$('ul<p:eq(0)').css('font-size', '38px');
    var p1 = $('ul').parent().parent().find('p:eq(0)');
    p1.css('font-size', '50px');
    //Posicionados en el Parrafo 2 cambiar el color de letra del li Elemento 5.
    //$('p:eq(1)').parent().css('font-size', '38px');
    var p2= $('p:eq(1)').parent().parent().find('li:eq(4)');
    p2.css('color', 'purple');
    //Posicionados en el li Elemento 4, con parent y find, llegar hasta el body y darle un background-color: blue.
    var bodyColor = $('li:eq(3)').parent().parent().parent().parent().parent().parent();
    bodyColor.css('background-color', 'blue')
    })


