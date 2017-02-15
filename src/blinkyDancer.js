var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.startTop = top;
  this.startLeft = left;
  makeDancer.call(this, top, left, timeBetweenSteps, 'blinky');
  // this.$node = $('<span class="dancer"><a href="#"><img src="img/Twerk.gif" loop="infinite"></a></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //   oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep();
  makeDancer.prototype.step.call(this);
   
  this.top = this.startTop;
  this.left = this.startLeft;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function() {
  this.startLeft = 1000;
  this.setPosition(this.startTop, this.startLeft);
};