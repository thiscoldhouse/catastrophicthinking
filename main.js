$(document).ready(function(){
  var state = {
    'isDaytime': (true ? Math.random() > .5 : false),
    'wordIndex': 0,
    'wordPairs': [
      ['for humans', 'for profit'],
      ['delightful', 'exploitative'],
      ['helpful', 'hostile'],
      ['for people', 'for shareholders'],
      ['inclusive', 'racist'],
      ['leftist', 'fascist'],
      ['fun', 'destructive'],
    ]
  }
  function rotateWords(){
    $('#first-word').fadeOut(function(){
      $("#first-word").html(state.wordPairs[state.wordIndex][0]);
      $("#first-word").fadeIn();
    });
    $('#second-word').fadeOut(function(){
      $("#second-word").html(state.wordPairs[state.wordIndex][1]);
      $("#second-word").fadeIn();
    });
    state.wordIndex += 1;
    if (state.wordIndex > state.wordPairs.length - 1){
      state.wordIndex = 0;
    }
  }

  function makeDayTime(){
    $("#day").css('display', 'block');
    $("#night").css('display', 'none');
    $('body').css('color', 'black');
    $('.carousel-word').css('border', '1px solid black');
    $('.button').css('border', '1px solid black');
  }

  function makeNightTime(){
    $("#night").css('display', 'block');
    $("#day").css('display', 'none');
    $('body').css('color', 'white');
    $('.carousel-word').css('border', '1px solid white');
    $('.button').css('border', '1px solid white');
    $('.sun').css('top', '100%');
  }

  function sunrise(){
    makeDayTime();
    $(".sun").animate({'top': '10px'}, 500);
    sky.removeClass("sunset");
  }

  function sunset(){
    $(".sun").animate({'top': '100%'}, 500, makeNightTime);
  }

  function toggleDayTime(){
    state.isDaytime = !state.isDaytime;
    if (state.isDaytime){
      sunrise();
    }
    else {
      sunset();
    }
  }

  // === page setup === //
  setInterval(rotateWords, 4000);
  // initial background
  if (state.isDaytime){
    makeDayTime();
  }
  else {
    makeNightTime();
  }
  // handler
  $('#toggle').on('click', toggleDayTime);
});
