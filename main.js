$(document).ready(function(){
  var state = {
    'wordIndex': 0,
    'wordPairs': [
      ['loving', 'hateful'],
      ['for humans', 'for profit'],
      // ['for people', 'for shareholders'],
      // ['friendly', 'exploitative'],
      // ['helpful', 'hurtful'],
      // ['welcoming', 'scary'],
      // ['inclusive', 'hateful'],
      // ['fun', 'destructive'],


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

  function animateWord(elem, text){
      elem
  }

  // === page setup === //
  setInterval(rotateWords, 4000);


});
