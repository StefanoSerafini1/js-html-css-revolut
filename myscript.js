//tendine  a comparsa e scomparsa su <li> prodotti e azienda
//prova con utilizzo mouse over e mouse out non perfetta


$(document).ready(
  function(){
      $('li.relative').mouseover(
        function(){
          $(this).children('ul.display-none').addClass('.active').removeClass('display-none');
       });
       $('ul.display-none').mouseout(
         function(){
           $(this).addClass('display-none').removeClass('.active');
         });
  }
);
