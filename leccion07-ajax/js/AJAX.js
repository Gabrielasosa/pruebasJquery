$(document).ready(function () {

    //cargar una pagina
    //$('#datos').load('https://reqres.in/');
    //get
    //$.get('https://reqres.in/api/users?page=2',function(res){
    //console.log(res);
    //})
    //obtenemos una parte de la pagina en este caso usuarios
    // var datos = $('#datos');
    // $.get('https://reqres.in/api/users', { page: 2 }, function (res) {
    //     let respuesta = res.data;
    //     respuesta.forEach(element => {
    /*
     //nos muestra solo el nombre
      datos.append('<p>' + element.first_name + '</p>')
      */
    /* 
    // Mostrar también el last_name.
   datos.append('<p>' + element.first_name + ', ' + element.last_name + '</p>')
   */
    /* //Añadir también un elemento img que contenga el avatar de cada usuario.
     datos.append('<p>' + element.first_name + ', '
         + element.last_name + '</p>' + '<img src="'
         + element.avatar + '">')
         */
    //  });


//peticiones post
//  var usuario = {
//      'name': 'Jose',
//      'job': 'developer'
//  }
//  $.post('https://reqres.in/api/users', usuario, function (response) {
//      console.log(response);
//  })
// //formulacio

// $('#enviarForm').on('click', function () {
//     let name = $('#name').val();
//     let job = $('#job').val();
//     let usuario = {
//         'name': name,
//         'job': job
//     }
//     $.post('https://reqres.in/api/users', usuario, function (response) {
//         console.log(response);
//     });
// });
//ejercicio opcion1
// $('#send').on('click', function () {
//     let email = $('#email').val();
//     let password = $('#passw').val();
//     let usuario = {
//         "email": email,
//         "password": password
//     }
//     $.post('https://reqres.in/api/register', usuario, function (response) {
//         console.log(response);
//     });
    // });
    //ejercicio opcion2
    // $('#enviarpasww').on('click', function () {
    //     let email = $('#email').val();
    //     let password = $('#password').val();
    //     let usuario = {

    //         "email": "peter@klaven",
    //         "password": "cityslicka"
    //     }

    // $.post('https://reqres.in/api/login', usuario, function (response) {
    //     console.log(response);
    //
    //  });
    // });

    //metodos ajax
   //  var usuario = {
//      'name': 'Jose',
//      'job': 'developer'
//  }
//  $.post('https://reqres.in/api/users', usuario, function (response) {
//      console.log(response);
//  })

    // $.ajax({
    //     type: 'POST',
    //     url: 'https://reqres.in/api/users',
    //     data: usuario,
    //     //parametro before send
    //     beforeSend: function () {
    //         alert('¿Estas seguro?')
    //     }
    // });
    // $.ajax({
    //     type: 'POST',
    //     url:'https://reqres.in/api/register',
    //     data: usuario,
    //     beforeSend:function(){
    //         alert('¿Estas seguro?')
    //     },
    //     success: function(){
    //         console.log('Peticion realizada')
    //     },
    // });
    $.ajax({
        type:'POST',
        url: 'https://reqres.in/api/login',
     //   data:usuario,
        beforeSend:function(){
            alert('¿Estas seguro?')
        },
        success: function(){
            console.log('Peticion realizada')
        }
    })

    })//fin document.ready