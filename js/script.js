$(document).ready(function() {
  $("form#vacation").submit(function(event) {

    var result = parseInt($(""))

    if (result <= 9) {
      //display moon
    }

    else if (result >= 20) {
      //display hell
    }

    else (result === 15) {
      //display dubai
    };


$("#result").show()

event.preventDefault();

  });
});
