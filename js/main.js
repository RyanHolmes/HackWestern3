var currentUnit = 1
var currentSlide = 1

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

  $(".butts").click(function() {
    //TODO: fadeout current slide
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

function createProgressBar() {

  $(".progress-indicator").html('');
  var unit = "#unit" + currentUnit
  var unitSlidesArray = $(unit).data('slides').split(",");
  var numSlides = unitSlidesArray.length;
  var htmlString = "";

  for(i = 1; i <= numSlides; i++) {
    if (i <= currentSlide)
      htmlString += "<li class='completed'>";
    else
      htmlString += "<li>";
    htmlString += "<span class='bubble'></span>";
    htmlString += "</li>";
  }

  $(".progress-indicator").html(htmlString);
}

function startSlideshow() {
  //iterate slides
  createProgressBar();
  $(".slide").each(function(i, obj) {
    var items = $(obj).find(".slide-item");
    items.data("order");
    items.sort(SortByName);
    //iterate items
    var culminatingDelay = 0;
    items.each(function(j, val){
      // animate-in, duration, delay, animate-out
      var self = $(val);
      var animate = self.data("animation").split(" ");
      setTimeout(function () {
        if(animate[0] == "none") {
          self.removeClass("hidden");
        }
        else if(animate[0] != "textillate" && animate[0] != "none"){
          self.addClass("animated");
          self.removeClass("hidden");
          self.addClass(animate[0]);
        }
        else {
          self.removeClass("hidden");
          self.textillate();
        }
      }, culminatingDelay + parseInt(animate[2]) * 1000);
      culminatingDelay += parseInt(animate[2]) * 1000
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
