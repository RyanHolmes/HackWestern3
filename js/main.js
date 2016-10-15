$(document).ready(function(){
  init();
  handlers();
});


function init() {
  $("#title").textillate();
  $("#logo").addClass("animated fadeIn");
  $("#slogan").addClass("animated fadeIn");
  $("#get-started").addClass("animated fadeInDown");
}

function handlers() {
  $("#get-started").click(function(){
    $("#landing").addClass("animated fadeOut");
    $("#landing").css("display", "none")
    $(".course").removeClass("hidden");
    $(".course").addClass("animated fadeIn");
  });

  $("#poop").click(function(){
    // TODO needs to be array of jquery obects with a counter
    $("#slide1").addClass("hidden");
    $("#slide2").removeClass("hidden");
    $("#slide2").addClass("expandUp");
    var snd = new Audio("../sounds/swoosh.mp3");
    snd.play();
  });

  $("#menu-toggle-out").hover(function(){
    if($(this).css("margin-left") == "0px"){
      $(this).animate({"margin-left": '+=150'});
      $("#side-nav").animate({"margin-left": '+=150'});
      $(".nav-link h5").addClass("animated rubberBand");
    }
  });

  $("#page-cantainer").hover(function(){
    if($("#menu-toggle-out").css("margin-left") == "150px"){
      $("#menu-toggle-out").animate({"margin-left": '-=150'});
      $("#side-nav").animate({"margin-left": '-=150'});
      $(".nav-link h5").removeClass("animated rubberBand");
    }
  });
}
