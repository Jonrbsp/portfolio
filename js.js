$(document).scroll(function(){
    windowScroll()
});

function windowScroll(){
  var st = $(document).scrollTop();

  $("#aff").css({"top": 32 - st * 0.15 + "px"});
  $("#aff").css({"left": 48 - st * 0.15 + "px"});
 }