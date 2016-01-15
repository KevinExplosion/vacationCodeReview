$(document).ready(function() {
  $("form#vacation").submit(function(event) {

    var ans1 = parseInt($("input#answer1").val());
    var ans2 = parseInt($("input#answer2").val());
    var ans3 = parseInt($("input#answer3").val());
    var ans4 = parseInt($("input#answer4").val());
    var ans5 = parseInt($("input#answer5").val());

    var desire = (ans1 + ans2 + ans3 + ans4 + ans5);
    if (desire <= 10) {
      $(".moon").show();
    } else if (desire <= 20) {
      $(".dubai").show();
    } else {
      $(".heck").show();
    };

event.preventDefault();

  });
});
