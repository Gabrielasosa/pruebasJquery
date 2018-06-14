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

//-------------------
//
var target;
var triggers = $('ul.triggers li');
var images = $('ul.images li');
var lastElem = triggers.length-1;
var mask = $('.mask ul.images');
var imgWidth = images.width();

triggers.first().addClass('active');
mask.css('width', imgWidth*(lastElem+1) +'px');

function sliderResponse(target) {
    mask.stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
    triggers.removeClass('active').eq(target).addClass('active');
}

triggers.click(function() {
    if ( !$(this).hasClass('active') ) {
        target = $(this).index();
        sliderResponse(target);
        resetTiming();
    }
});

$('.next').click(function() {
    target = $('ul.triggers li.active').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
    resetTiming();
});
$('.prev').click(function() {
    target = $('ul.triggers li.active').index();
    lastElem = triggers.length-1;
    target === 0 ? target = lastElem : target = target-1;
    sliderResponse(target);
    resetTiming();
});

function sliderTiming() {
    target = $('ul.triggers li.active').index();
    target === lastElem ? target = 0 : target = target+1;
    sliderResponse(target);
}

var timingRun = setInterval(function() { sliderTiming(); },5000);
function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() { sliderTiming(); },5000);
}
})//fin document.ready