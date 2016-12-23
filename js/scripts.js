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

  // for(var i = 0; i < links.length; i++){
  //   $(links[i]).hover(function(){
  //     console.log(i);
  //   }, function(){
  //     if(i == 0){
  //       $(links[1]).removeClass('link-blur');
  //       $(links[2]).removeClass('link-blur');
  //     }
  //   });
  // }

});
