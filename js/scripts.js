$(document).ready(function() {
  $("button#cat-button").click(function() {
    $("ul#dog-list").prepend("<li>Bark!</li>");
    $("ul#dog-list").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#dog-button").click(function() {
    $("ul#cat-list").prepend("<li>Meow!!</li>");
    $("ul#cat-list").children("li").first().click(function() {
      $(this).remove();
    });
  });

/*
  $("button#friends-button").click(function() {
    $("#friends-showing").toggle();
    $("#friends-hidden").toggle();
    });
  });
*/
});
