$(document).ready(function () {
    //explode

    var mostrar = $('#mostrar');
    var caja = $('#cajaEfectos');


    mostrar.on('click', function () {
        //----------Explode
        //caja.toggle('explode');

        //-----------blind
        //caja.toggle('blind');
        //--------drop
        //caja.toggle('drop');
        //-----------fold
        //caja.toggle('fold');
        //-----------Puff
        //caja.toggle('puff');
        //----------scale
        //caja.toggle('scale');
        //--------shake
        //caja.toggle('shake');
        //caja.toggle('shake', 200);
    })

//-----------comienzan los Widget
//invicamos al evento tooltip
$(document).tooltip();

//------cuadro de dialogo
//$('#popup').dialog();

//-----boton que lanza un cuadroo de dialogo
var botonPopup = $('#lanzarDialog');
var cuadroDialogo = $('#popup');
botonPopup.on('click', function(){
    cuadroDialogo.dialog();
})

// -------calendario
$('#calendario').datepicker();

//------ Tabs
$('#tabs').tabs(); 



})//fin document.ready