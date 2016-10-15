$(document).ready(function(){
  $("#poop").click(function(){
    // TODO needs to be array of jquery obects with a counter
    $("#slide1").addClass("hidden");
    $("#slide2").removeClass("hidden");
    $("#slide2").addClass("expandUp");
  });

  $("#menu-toggle-out").click(function(){
    $(this).addClass("hidden");
    $("#side-nav").removeClass("hidden");
    $("#side-nav").addClass("stretchRight");
    $("#menu-toggle-in").removeClass("hidden");
  });

  $("#menu-toggle-in").click(function(){
    $(this).addClass("hidden");
    $("#side-nav").removeClass("stretchRight");
    $("#side-nav").addClass("hidden");
    // $("#side-nav").animate({ "margin-left": '+=200' });
    $("#menu-toggle-out").removeClass("hidden");
    // window.setInterval(function(){
      // $("#menu-toggle-in").addClass("hidden");
    //   $("#menu-toggle-out").removeClass("hidden");
    //   $("#menu-toggle-in").removeClass("hidden");
    // }, 350);
  });
});
