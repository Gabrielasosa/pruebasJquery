$(document).ready(function () {
    var add_enlaces = $('#add_button');
    var add_text = $('#add_text');
    var menu = $('#menu_enlaces');
    //caja.remove()//removemos la caja
    reloadLinks();

    add_enlaces.on('click', function () {
        let nuevo_enlace = add_text.val();
        //menu.append('<li><a href="' + nuevo_enlace + '"></a></li>');lo añade al final
        menu.prepend('<li><a href="' + nuevo_enlace + '"></a></li>');//lo añade al principio
        reloadLinks();
    })//final de enlaces.on

    /*enlaces.each(function(i){
        let enlace = $(this);
        let texto_enlace = enlace.text();
        enlace.attr('href',texto_enlace);
    })*/


    function reloadLinks() {
        let enlaces = $('a');
        enlaces.each(function (i) {
            let enlace = $(this);
            let texto_enlace = enlace.attr('href');
            enlace.text(texto_enlace);
        });
    };

    //Before: añadimos los enlaces antes del elemento seleccionado en este caso todo se introduce antes del li
    /*add_enlaces.on('click', function () {
            let nuevo_enlace = add_text.val();
            menu.before('<li><a href="' + nuevo_enlace + '"></a></li>');
            reloadLinks();
        })*/
    //After: añadimos los enlaces despues del elemento seleccionado en este caso todo se introduce despues del li
    add_enlaces.on('click', function () {
        let nuevo_enlace = add_text.val();
        menu.after('<li><a href="' + nuevo_enlace + '"></a></li>');
        reloadLinks();
    })


    //--------------empezamos con efectos de la caja
    /* var caja = $('#caja');//declaramos la variable caja y llamamos a traves del id a caja
     caja.hide();
     var mostrar = $('#mostrar');
     mostrar.on('click', function () {
         caja.show();//al hacer click en mostrar nos enseña la caja
     })
     var ocultar = $("#ocultar");
     ocultar.on('click', function () {//al hacer click en ocultar nos oculta la caja
         caja.hide();
     })
 */
    /*
Ejercicio 2 de clase: Hacer que cuando pulse el botón mostrar se oculte el mismo botón y me muestre el botón de ocultar y viceversa.

    */
    var caja = $('#caja');
    var mostrar = $('#mostrar');
    var ocultar = $("#ocultar");
    /* caja.hide();
     ocultar.hide();
     mostrar.on('click', function () {
         $(this).hide();
         ocultar.show();
         caja.show();
     })
 
     ocultar.on('click', function () {
         $(this).hide();
         mostrar.show();
         caja.hide();
     })
     //---toogle con boton 2 
     $('#todoenuno').on('click', function () {
         caja.toggle('normal');
     })
     ocultar.hide();
     mostrar.on('click', function () {
         $(this).hide();
         ocultar.show();
         caja.slideDown();
     })
 
     ocultar.on('click', function () {
         $(this).hide();
         mostrar.show();
         caja.slideUp();
     })*/
    //--------animacion
    $('#animacion').on('click', function () {

        caja.animate({
            left: '500px',
            top: '200px'
        }
            , 'slow')
            .animate({//con esto encadeno la animacion
                left: '0px',
                top: '20px'
            })
            .animate({
                left: '150px',
                top: '185px'
            })

    })

});//final de document. ready
