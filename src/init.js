$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var height = $('body').height() * Math.random();
    if (height < 100) {
      height = 100;
    }
    var dancer = new dancerMakerFunction(
      height,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('#lineUpButton').click(function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('#pairUpButton').click(function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('#spreadOutButton').click(function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      dancers[i].startTop = $('body').height() * Math.random();
      dancers[i].startLeft = $('body').width() * Math.random();
      if (dancers[i].startTop < 100) {
        dancers[i].startTop = 100;
      }
      window.dancers[i].setPosition(dancers[i].startTop, dancers[i].startLeft);
    }
  });

  $('body').on('mouseover', '.dancer', function(event) {
    var current = event.currentTarget;
    console.log(current.style);
    var spacing = 100;
    for (var i = 0; i < window.dancers.length; i++) {
      // console.log(event.currentTarget);
      // var distance = Math.sqrt(Math.pow((event.currentTarget. - y2), 2) + Math.pow((x - x2), 2));
      window.dancers[i].setPosition(spacing, spacing);
      spacing += 50;
    }
  });
});

