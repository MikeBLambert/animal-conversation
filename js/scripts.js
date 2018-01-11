$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#dog-response").prepend("<h2>Woof! I love you.</h2>");
    $("h2").first().click(function() {
      $(this).after('<img src="img/pumpkin-dog.jpg">')

    });
  });
});

$(document).ready(function() {
  $("button#woof").click(function() {
    $("ul#cat-response").prepend("<h2>Meow...I'm a stupid cat.</h2>");
    $("h2").first().click(function() {
      $(this).after('<img src="img/scared-cat.jpg">')


      });
  });
});
