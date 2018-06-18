$(document).ready(function () {

      //acordeon
      var dds = $('dd');
      dds.hide();
  
      $('dt').on('mouseenter', function () {
          dds.slideUp(200);
          $(this).next().slideDown(200);
      });//fin de acordeon
  
    //ancla para subir
    $(function () {
        $('a[href*=#]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                && location.hostname == this.hostname) {

                var $target = $(this.hash);

                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

                if ($target.length) {

                    var targetOffset = $target.offset().top;

                    $('html,body').animate({ scrollTop: targetOffset }, 1000);

                    return false;

                }// if

            }// if

        });//function
      
    });//fin de la funcion


});//fin document.ready