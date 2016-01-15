$(document).ready(function() {
  $("#vacation").submit(function(event) {

    var ans1 = parseInt($("select#answer1").val());
    var ans2 = parseInt($("select#answer2").val());
    var ans3 = parseInt($("select#answer3").val());
    var ans4 = parseInt($("select#answer4").val());
    var ans5 = parseInt($("select#answer5").val());

    var desire = (ans1 + ans2 + ans3 + ans4 + ans5);
    if (desire <= 6) {
      $(".moon").show();
    } else if (desire <= 19) {
      $(".dubai").show();
    } else {
      $(".heck").show();
    };

event.preventDefault();

  });
});
