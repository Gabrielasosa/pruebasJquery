$(document).ready(function () {

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: 'foo',
    //       body: 'bar',
    //       userId: 1,

    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    //--------------- ejercicio1
    var datos = $('#ejercicio1');
    fetch('https://jsonplaceholder.typicode.com/posts', function (res) {
        let respuesta = res;
        respuesta.forEach(response => {
            if (response.datos) {
                datos.append('<li>' + response.title + '</li>')
                datos.append('<li>' + response.userId + '</li>')
                datos.append('<li>' + response.body + '</li>')
            } else if{

            }
           
        });
    })


    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => console.log(json))

    //-----------ejercicio2


    //------------ejercicio3
});//final document.ready