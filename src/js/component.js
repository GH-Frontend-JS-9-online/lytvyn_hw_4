$(document).ready(function () {
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });
  $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.social-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
      0: {
        items: 1
      }
    }
  })
  $('.mob-btn').click(function(){
    $(this).toggleClass('active');
    $('.menu').slideToggle(300);
  })
  
  if($(window).width() < 1200) {
    $('.menu').append('<li><h3>Follow Us</h3>  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#fff" d="M32 47v-6c0-1 0-3-2-5 8-1 12-5 12-12 1-3-1-6-3-9V8c-2-1-7 1-8 2H18c-3-2-6-3-8-2v7c-2 2-5 4-4 9 1 7 6 11 14 12-2 1-2 2-2 3-6 2-7-2-8-3-2-3-4-2-4-2l1 2 3 4c2 4 8 2 8 2v6C7 45 0 36 0 24 0 11 11 0 24 0s24 11 24 24c0 11-7 20-16 23z"/></svg></a><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="38"><path fill="#fff" d="M48 4a20 20 0 01-6 2l5-5a20 20 0 01-7 2 10 10 0 00-7-3 10 10 0 00-9 12C15 11 8 8 3 2a9 9 0 00-1 5c0 3 2 6 4 8a10 10 0 01-4-2c0 5 3 9 8 10a10 10 0 01-5 0c2 4 5 7 10 7a20 20 0 01-15 4 28 28 0 0015 4A27 27 0 0043 9a20 20 0 005-5z"/></svg></a> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="48"><path fill="#fff" d="M18 9h6V0h-7C8 0 6 5 6 11v4H0v9h6v24h9V24h7l2-9h-9v-3c0-1 1-3 3-3z"/></svg></a></li>');
  }
});