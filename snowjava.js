 $(document).ready(function(){
 console.log('hello');
  $(window).scroll(function(){
     if ($(document).scrollTop() >10)
       { $('#nav1').addClass('opacity-nav');
            }
  else { $('#nav1').removeClass('opacity-nav'); }

});


});




