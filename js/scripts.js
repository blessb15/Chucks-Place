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
    var page1 = $('.home-page').height();
    if($(document).scrollTop() < page1){
      $('.nav-bubble-contact').removeClass('active');
      $('.nav-bubble-menu').removeClass('active');
      $('.nav-bubble-home').addClass('active');
    } else if ($(document).scrollTop() >= page1){
      $('.nav-bubble-contact').removeClass('active');
      $('.nav-bubble-home').removeClass('active');
      $('.nav-bubble-menu').addClass('active');
    }
    if ($(document).scrollTop() == $(document).height() - page1){
      $('.nav-bubble-menu').removeClass('active');
      $('.nav-bubble-home').removeClass('active');
      $('.nav-bubble-contact').addClass('active');
    }
  });

  $('.home, .nav-bubble-home').click(function(e){
    e.preventDefault();
    var page = 0;
    var target = $('a[name="home"]').offset().top;
    $('body, html').animate(
      {scrollTop: page},
      1000
    );
  });

  $('.menu, .nav-bubble-menu').click(function(e){
    e.preventDefault();
    var page = $('.menu-page').height();
    var target = $('a[name="menu"]').offset().top;
    $('body, html').animate(
      {scrollTop: page},
      1000
    );
  });

  $('.contact, .nav-bubble-contact').click(function(e){
    e.preventDefault();
    var page = $('.contact-page').height() * 2;
    var target = $('a[name="contact"]').offset().top;
    $('body, html').animate(
      {scrollTop: page},
      1000
    );
  });

  $(window).resize(function(){
	if ($(window).width() <= 767){
		$('.nav-bubbles').hide();
    $('.home-page').css('height', '50vh');
    $('.home-video').css('height', '30vh');
    $('.home-video').css('margin-top', '14vh');
    $('.home-video').css('max-width', '1400px');
    $('.menu-page').css('height', '50vh');
    $('.menu-img').css('max-width', '1500px');
    $('.contact-page').css('height', '50vh');
    $('.contact-header').css('margin-bottom', '100px');
    $('.form-message').attr('rows', '20');
	}
});

});
