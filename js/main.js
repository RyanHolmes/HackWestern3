$(document).ready(function(){
  $("#poop").click(function(){
    // TODO needs to be array of jquery obects with a counter
    $("#slide1").addClass("hidden");
    $("#slide2").removeClass("hidden");
    $("#slide2").addClass("expandUp");
  });

  $("#menu-toggle-out").click(function(){
    $("#side-nav").removeClass("hidden");
    $("#side-nav").addClass("stretchRight");
    $(this).addClass("hidden");
  });

  $("#menu-toggle-in").click(function(){
    $("#side-nav").addClass("hidden");
    $(this).addClass("hidden");
    $("#menu-toggle-out").removeClass("hidden");
    $("#menu-toggle-in").removeClass("hidden");
  });
});
