var makeSpinningDancer = function(top, left, timeBetweenSteps) {
  if (timeBetweenSteps < 500) {
    timeBetweenSteps = 500;
  }
  this.startTop = top;
  // this.originalStartTop = top;
  this.startLeft = left;
  // this.o riginalStartLeft = left;
  makeDancer.call(this, top, left, timeBetweenSteps, 'spinny');
};

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  this.top = this.startTop;
  this.left = this.startLeft;
  setTimeout(this.setPosition.bind(this, this.top, this.left), this.timeBetweenSteps * (1 / 9));
  setTimeout(this.setPosition.bind(this, this.top - 12, this.left - 12), this.timeBetweenSteps * (2 / 9));
  setTimeout(this.setPosition.bind(this, this.top - 29, this.left - 12), this.timeBetweenSteps * (3 / 9));
  setTimeout(this.setPosition.bind(this, this.top - 41, this.left), this.timeBetweenSteps * (4 / 9));
  setTimeout(this.setPosition.bind(this, this.top - 41, this.left + 17), this.timeBetweenSteps * (5 / 9));
  setTimeout(this.setPosition.bind(this, this.top - 29, this.left + 29), this.timeBetweenSteps * (6 / 9));
  setTimeout(this.setPosition.bind(this, this.top - 12, this.left + 29), this.timeBetweenSteps * (7 / 9));
  setTimeout(this.setPosition.bind(this, this.top, this.left + 17), this.timeBetweenSteps * (8 / 9));
  setTimeout(this.setPosition.bind(this, this.top, this.left), this.timeBetweenSteps * (9 / 9));
};

makeSpinningDancer.prototype.lineUp = function() {
  this.startLeft = 100;
  this.setPosition(this.startTop, this.startLeft);
};