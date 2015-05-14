// establish the seasonal produce
var spring_produce = ["asparagus", "beets", "broccoli", "rhubarb", "spinach"];
var summer_produce = ["carrots", "cucumbers", "tomatoes", "green beans", "sweet corn"];
var fall_produce = ["daikon", "sweet potatoes", "apples", "Brussels sprouts", "fennel"];
var winter_produce = ["cabbage", "kale", "leeks", "parsnips", "winter squash"];
var all_produce = [spring_produce, summer_produce, fall_produce, winter_produce];

// determine what season it is from the date on the computer
var today = new Date();
var month = today.getMonth() + 1;


function what_season() {
  var season = null;
  if (month < 3 || month == 12) {
    season = "Winter";
  } else if (month < 7) {
    season = "Spring";
  } else if (month < 10) {
    season = "Summer";
  } else {
    season = "Fall";
  }
  return season;
}

var season = what_season();

// populate the page with produce based on the current season. 

function make_buttons(seasonal_produce) {
  var prod_id = undefined;
  $('.produce').html("");
  for (var i = 0; i < seasonal_produce.length; i++) {
  prod_id = seasonal_produce[i].replace(/\s+/g, '');
  $('.produce').append('<div class="display_produce" id="' + prod_id + '_pic"> <button id="' + prod_id + '">' + '<span>' + seasonal_produce[i] + '</span>' + '</button> </div>');
  $('button').blur();
  }
}

function populate_produce() {
  switch(season) {
    case "Spring":
      make_buttons(spring_produce);
      $('#season').html("Spring");
      break;
    case "Summer":
      make_buttons(summer_produce);
      $('#season').html("Summer");
      break;
    case "Fall":
      make_buttons(fall_produce);
      $('#season').html("Fall");
      break;
    case "Winter":
      make_buttons(winter_produce);
      $('#season').html("Winter");
      break;
  }  
}

populate_produce();



// show recipe when button is clicked


function show_recipe() {
  var ingredient = $(this).attr('id');
  
  $('.recipe>div').css('display', 'none');

  $('div#' + ingredient).css('display', 'block');
}

$('.produce').on("click", "button", show_recipe);

// scroll down to recipe

$('.produce').on("click", "button", function() {
    $('html, body').animate({
        scrollTop: $(".recipe").offset().top
    }, 800);
});

// change the season with drop down selector

$('#select_season').on('input', function() {
  season = $('#select_season').val();
  populate_produce();
  if (season == what_season()) {
    $('.main>h2').html('It\'s <span id="season">' + season + '</span>! Here\'s what\'s in season:');  
  } else {
      $('.main>h2').html('It\'s not <span id="season">' + season + '</span>, but if it were, here\'s what would be in season:');
    }  
});


