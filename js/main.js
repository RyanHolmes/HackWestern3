$(document).ready(function(){
  $("#poop").click(function(){
    // TODO needs to be array of jquery obects with a counter
    $("#slide1").addClass("hidden");
    $("#slide2").removeClass("hidden");
    $("#slide2").addClass("expandUp");
  });

  $("#menu-toggle").click(function(){
    $("#side-nav").removeClass("hidden");
    $("#side-nav").addClass("stretchRight");
  });
});
