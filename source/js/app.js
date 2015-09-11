$(document).ready(function() {
  //includes navbar into any pages
  $(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 0) {
    $('.page').each(function(i) {
      if ($(this).position().top <= windscroll + 10) {
        $('.nav-link.active').removeClass('active');
        $('.nav-link').eq(i).addClass('active');
      }
    });
  } else {
    $('nav li.active').removeClass('active');
  }
}).scroll();
  //matchHeight
  $(function() {
    $('.box-height').matchHeight();
  });
  //toggle menu
  $('.menu-button, ul').click(function() {
    $('.menu-button').toggleClass('hide-for-mobile');
    $('nav').toggleClass('offscreen-right');
  });
  $('nav').mouseleave(function() {
      $('nav').toggleClass('offscreen-right');
      $('.menu-button').toggleClass('hide-for-mobile');
  });
});
