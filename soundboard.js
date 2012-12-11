window.U = {
  forEach: function(arr,fn){
    for(var i = 0, l = arr.length; i < l; i++){
      fn(arr[i]);
    }
  },
  
  tag: function(selector){
    return document.getElementsByTagName(selector)[0];
  },
  
  class: function(selector){
    return document.getElementsByClassName(selector)[0];
  },
  
  id: function(selector){
    return document.getElementById(selector);
  }
};

window.Soundboard = function(){
  var play = U.class('play');
  var stop = U.class('stop');
  var record = U.class('record');
  var norecord = U.class('norecord');
  var playIt = function(event){
    play.style.display = "none";
    stop.style.display = "block";
    return false;
  };
  var stopIt = function(event){
    play.style.display = "block";
    stop.style.display = "none";
    return false;
  };
  var recordIt = function(event){
    record.style.display = "none";
    norecord.style.display = "block";
    return false;
  };
  var norecordIt = function(event){
    record.style.display = "block";
    norecord.style.display = "none";
    return false;
  };
  play.onclick = playIt;
  stop.onclick = stopIt;
  record.onclick = recordIt;
  norecord.onclick = norecordIt;
  stopIt();
  norecordIt();
};


window.onload = function(){
  window.soundboard = new Soundboard();
};