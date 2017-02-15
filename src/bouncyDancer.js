var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  if (timeBetweenSteps < 500) {
    timeBetweenSteps = 500;
  }
  this.startTop = top;
  this.startLeft = left;
  makeDancer.call(this, top, left, timeBetweenSteps, 'bouncy');
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  
  this.top = this.startTop;
  setTimeout(this.setPosition.bind(this, this.top, this.left), this.timeBetweenSteps * (1 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 5, this.left), this.timeBetweenSteps * (2 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 10, this.left), this.timeBetweenSteps * (3 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 15, this.left), this.timeBetweenSteps * (4 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 20, this.left), this.timeBetweenSteps * (5 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 25, this.left), this.timeBetweenSteps * (6 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 30, this.left), this.timeBetweenSteps * (7 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 35, this.left), this.timeBetweenSteps * (8 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 40, this.left), this.timeBetweenSteps * (9 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 45, this.left), this.timeBetweenSteps * (10 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 50, this.left), this.timeBetweenSteps * (11 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 55, this.left), this.timeBetweenSteps * (12 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 60, this.left), this.timeBetweenSteps * (13 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 55, this.left), this.timeBetweenSteps * (14 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 50, this.left), this.timeBetweenSteps * (15 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 45, this.left), this.timeBetweenSteps * (16 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 40, this.left), this.timeBetweenSteps * (17 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 35, this.left), this.timeBetweenSteps * (18 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 30, this.left), this.timeBetweenSteps * (19 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 25, this.left), this.timeBetweenSteps * (20 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 20, this.left), this.timeBetweenSteps * (21 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 15, this.left), this.timeBetweenSteps * (22 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 10, this.left), this.timeBetweenSteps * (23 / 24));
  setTimeout(this.setPosition.bind(this, this.top - 5, this.left), this.timeBetweenSteps * (24 / 24));
};

makeBouncyDancer.prototype.lineUp = function() {
  // console.log(this.$node)
  this.startTop = 600;
  this.setPosition(this.startTop, this.startLeft);
  // this.top = this.startTop;
  // this.left = this.startLeft;
};