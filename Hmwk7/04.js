

// // Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
// <body onload="myFunction()">

$("body").css("display", 'none').fadeIn("slow");

// Give each paragraph a yellow background only when the mouse is over it.
$('p').on('mouseover', function() {
	$('p').css('background', 'yellow');
});
$('p').on('mouseout', function() {
	$('p').css('background', 'none');
});

// Make a click of the title (<h2>) and simultaneously fade it to 25 percent opacity and grow its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.
$('h2').on('click', function () {
	$('h2').fadeTo(400, 0.25, function() {
    $('.speech').fadeTo(800, 0.50);
  });
	$('h2').css('margin-left', '20px');
});



// Bonus: Make the style switcher work.
$('#switcher-default').on('click', function () {
	$('.speech').css('font-size', '1.0em');
});

$('#switcher-large').on('click', function () {
	$('.speech').css('font-size', '1.5em');
});

$('#switcher-small').on('click', function () {
	$('.speech').css('font-size', '0.8em');
});


// Challenge: React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).
// First Try
// $('#document').keydown(function(e){
//   if (e.which === 37) {
//   $('#switcher').css('margin-right', '20px');
// } else if (e.which === 38) {
//   $('#switcher').css('margin-bottom', '20px');
// } else if (e.which === 39) {
//   $('#switcher').css('margin-left', '20px');
// } else if (e.which === 40) {
//   $('#switcher').css('margin-top', '20px');
// }
// });

$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $("#switcher").finish().animate({
            left: "-=50"
        });
        break;
    case 38:    //up arrow key
        $("#switcher").finish().animate({
            top: "-=50"
        });
        break;
    case 39:    //right arrow key
        $("#switcher").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    //bottom arrow key
        $("#switcher").finish().animate({
            top: "+=50"
        });
        break;
    }
});
