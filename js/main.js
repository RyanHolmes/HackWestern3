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
    nextSlide();
  });

  $(".butts").click(function() {
    var slide = $($($(".unit")[currentUnit - 1]).find(".slide")[currentSlide - 1]);
    var butts = $(slide.find(".butts")).data("transition");
    slide.addClass("animated");
    slide.addClass(slide.data("animate-out"));
    slide.addClass("hidden");
    slide.removeClass("animated");
    slide.removeClass(slide.data("animate-out"));
    if(butts == "slide"){
      currentSlide += 1;
      var slide = $($($(".unit")[currentUnit - 1]).find(".slide")[currentSlide - 1]);
      slide.removeClass("hidden");
    }
    else {
      var unit = $($(".unit")[currentUnit - 1]);
      unit.addClass("hidden");
      currentSlide = 1;
      currentUnit += 1;
      var unit = $($(".unit")[currentUnit - 1]);
      var slide = $($($(".unit")[currentUnit - 1]).find(".slide")[currentSlide - 1]);
      unit.removeClass("hidden");
      slide.removeClass("hidden");
    }
    nextSlide();
  });

  $('.nav-link').click(function(){

      var slide = $($($(".unit")[currentUnit - 1]).find(".slide")[currentSlide - 1]);
      var unit = $($(".unit")[currentUnit - 1]);
      // slide.addClass("animated");
      // slide.addClass(slide.data("animate-out"));
      slide.addClass("hidden");
      unit.addClass("hidden");
      // slide.removeClass("animated");
      // slide.removeClass(slide.data("animate-out"));

      console.log(slide);
      console.log(unit);

      buttonId = $(this).attr("id");
      currentSlide = 1;

      console.log(buttonId);

      if (buttonId == "nav-intro") { currentUnit = 1; }
      else if (buttonId == "nav-budgeting") { currentUnit = 2; }
      else if (buttonId == "nav-debt") { currentUnit = 3; }
      else if (buttonId == "nav-saving") { currentUnit = 4; }
      else if (buttonId == "nav-investing") { currentUnit = 5; }
      else if (buttonId == "nav-life") { currentUnit = 6; }
      else {}

      var slide = $($($(".unit")[currentUnit - 1]).find(".slide")[currentSlide - 1]);
      var unit = $($(".unit")[currentUnit - 1]);
      unit.removeClass("hidden");
      slide.removeClass("hidden");
      // slide.addClass("animated");

      nextSlide();

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
  if (numSlides == 1) return;
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

function nextSlide() {
  //iterate slides
  createProgressBar();
  var slide = $($(".unit")[currentUnit - 1]).find(".slide")[currentSlide - 1];
  var items = $(slide).find(".slide-item");
  items.data("order");
  items.sort(SortByName);
  console.log(slide)
  console.log(items.length)
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
}

function SortByName(a, b){
  var aNum = parseInt($(a).data("order"));
  var bNum = parseInt($(b).data("order"));
  return aNum - bNum;
}

// function nextSlide() {

// }
