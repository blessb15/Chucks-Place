$(Document).ready(function() {

  var links = ['.home', '.menu', '.contact'];

  $('.home').hover(function() {
    $(links[1]).addClass('link-blur');
    $(links[2]).addClass('link-blur');
  },
  function() {
    $(links[1]).removeClass('link-blur');
    $(links[2]).removeClass('link-blur');
  });

  $('.menu').hover(function() {
    $(links[0]).addClass('link-blur');
    $(links[2]).addClass('link-blur');
  },
  function() {
    $(links[0]).removeClass('link-blur');
    $(links[2]).removeClass('link-blur');
  });

  $('.contact').hover(function() {
    $(links[1]).addClass('link-blur');
    $(links[0]).addClass('link-blur');
  },
  function() {
    $(links[1]).removeClass('link-blur');
    $(links[0]).removeClass('link-blur');
  });

  $(window).scroll(function(){
    if($(document).scrollTop() >= 0 && $(document).scrollTop() < 832){
      $('.nav-bubble-contact').removeClass('active');
      $('.nav-bubble-menu').removeClass('active');
      $('.nav-bubble-home').addClass('active');
    } else if ($(document).scrollTop() >= 832 && $(document).scrollTop() < 1682){
      $('.nav-bubble-contact').removeClass('active');
      $('.nav-bubble-home').removeClass('active');
      $('.nav-bubble-menu').addClass('active');
    } else {
      $('.nav-bubble-menu').removeClass('active');
      $('.nav-bubble-home').removeClass('active');
      $('.nav-bubble-contact').addClass('active');
    }
  });

  $('.home, .nav-bubble-home').click(function(e){
    e.preventDefault();
    console.log("yo");
    var target = $('a[name="home"]').offset().top;
    $('body, html').animate(
      {scrollTop: target},
      1000
    );
  });

  $('.menu, .nav-bubble-menu').click(function(e){
    e.preventDefault();
    var target = $('a[name="menu"]').offset().top;
    $('body, html').animate(
      {scrollTop: target},
      1000
    );
  });

  $('.contact, .nav-bubble-contact').click(function(e){
    e.preventDefault();
    var target = $('a[name="contact"]').offset().top;
    $('body, html').animate(
      {scrollTop: target},
      1000
    );
  });

});
