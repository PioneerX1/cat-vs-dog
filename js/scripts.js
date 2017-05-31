$(document).ready(function() {
  $("button#cat-button").click(function() {
    $("ul#dog-list").prepend("<li>Bark!</li>");
    $("ul#dog-list").after("<img src='img/dog-bark.jpg'>");

/*
    $("img src="img/dog-bark.jpg"").click(function() {
      $(this).remove();
    });
*/

    $("ul#dog-list").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#dog-button").click(function() {
    $("ul#cat-list").prepend("<li>Meow!!</li>");
    $("ul#cat-list").after("<img src='img/cat-meow.jpg'>");
    $("ul#cat-list").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#friends-button").click(function() {
    $("#friends-showing").toggle();
    });
  });
