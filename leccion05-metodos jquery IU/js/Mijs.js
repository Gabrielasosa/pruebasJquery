$(document).ready(function () {
    //aqui estan todas las variables
    var elementos = $('.elemento');
    var lista = $('.listaOrdenable');
    var area = $('#area');
    var movido = $('#elemento-movido');

    //selectable seleccionarlo y que cambie de color
    //lista.selectable();
    //seleccionarlo y moverlo
    lista.sortable({
        update: function () {//permire una funcion de callback
            console.log('Ha cambiado la lista');
        }
    });
    //draggable
    elementos.draggable();
    //resizable
    elementos.resizable();
    //  Droppable
    movido.draggable();
    //area.droppable();
//al mover el elemnto el otro que no se mueve cambia de color
    area.droppable({
        drop: function () {
            $(this).css('background-color', 'yellow')
        }
    });
})