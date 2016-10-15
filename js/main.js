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
    // $(".course").addClass("animated fadeIn");
    startSlideshow();
  });

  // var snd = new Audio("../sounds/swoosh.mp3");
  // snd.play();

  $("#menu-toggle-out").hover(function(){
    if($(this).css("margin-left") == "0px"){
      $(this).animate({"margin-left": '+=150'});
      $("#side-nav").animate({"margin-left": '+=150'});
      $(".nav-link h5").addClass("animated rubberBand");
    }
  });

  $("#page-container").hover(function(){
    if($("#menu-toggle-out").css("margin-left") == "150px"){
      $("#menu-toggle-out").animate({"margin-left": '-=150'});
      $("#side-nav").animate({"margin-left": '-=150'});
      $(".nav-link h5").removeClass("animated rubberBand");
    }
  });
}

function startSlideshow() {
  //iterate slides
  $(".slide").each(function(i, obj) {
    items = $(obj).find(".slide-item");
    items.data("order");
    items.sort(SortByName);
    //iterate items
    items.each(function(j, val){
      // animate-in, duration, delay, animate-out, duration
      self = $(val);
      animate = self.data("animation").split(" ");
      // setTimeout(function () {
        if(self.data("animation") == "none") {
          self.removeClass("hidden");
        }
        else if(self.data("animation") != "textillate" && self.data("animation") != "none"){
          self.addClass("animated");
          self.removeClass("hidden");
          self.addClass(animate[0]);
        }
        else {
          self.removeClass("hidden");
          self.textillate();
        }
      // }, parseInt(animate[2]) * 1000);
    });
  });
}

function SortByName(a, b){
  var aNum = parseInt($(a).data("order"));
  var bNum = parseInt($(b).data("order"));
  return aNum - bNum;
}

// function nextSlide() {

// }
