// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, dancerType) {
  // use jQuery to create an HTML <span> tag
  
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  if (dancerType === 'blinky') {
    this.$node = $('<span class="dancer"><a href="#"><img src="img/Twerk.gif"></a></span>');
  } else if (dancerType === 'bouncy') {
    this.$node = $('<span class="dancer"><a href="#"><img src="img/BrianDancing.gif"></a></span>');
  } else if (dancerType === 'spinny') {
    this.$node = $('<span class="dancer"><a href="#"><img src="img/KennyDancing.gif"></a></span>');
  }
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  // debugger;
  this.top = top;
  this.left = left;
  // debugger;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.getPosition = function() {
  debugger;
  return {top: this.top, left: this.left};
};
