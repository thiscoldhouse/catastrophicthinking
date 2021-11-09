var _state = {};
var _renderPage = {
  'function': function(){}
}

let stateChangeHandler = {
  get: function(obj, prop){
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      return new Proxy(obj[prop], stateChangeHandler)
    } else {
      return obj[prop];
    }
  },
  set: function(obj, prop, value){
    obj[prop] = value;
    if (renderPage.callback){
      renderPage.callback()
    }
    return true;
  }
};

let renderPageChangeHandler = {
  get: function(obj, prop){
    return obj[prop]
  },
  set: function(obj, prop, value){
    obj[prop] = value;
    if (value){
      value();
    }
    return true;
  }
};


const renderPage = new Proxy(_renderPage, renderPageChangeHandler);
const state = new Proxy(_state, stateChangeHandler);

function goToPage(page_name) {
  window.location.hash = "#!"+ page_name;
}

function locationHasChanged(){
  console.log('change');
  var newPage = window.location.hash.substring(1);
  newPage = newPage.split('?')[0];  //removes query string
  if (!newPage){
    newPage = "home"
  }
  else {
    newPage = newPage.slice(1,) // remove "!"
  }
  $.get('/pages/' + newPage + '.html', function(page){
    $("#main-container").html(page)
  });
}


$(document).ready(function(){
  $(window).on('hashchange', locationHasChanged);
  locationHasChanged();  //initial load
});
