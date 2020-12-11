// NavBar collapse on window click
$(document).ready(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
});


// NavBar dropdown on hover
$('.dropdown').hover(function () {
  $('.dropdown-toggle', this).trigger('click');
});

// Type_writer
var i = 0;
var txt = "Only Perfection is Permitted here!";
var speed = 50;
function typeWriter() {
  document.getElementById("writer").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
var writer = document.getElementById("writer")
if (writer !== null) {
  typeWriter();
}


// HOME PAGE COLLPASE 

