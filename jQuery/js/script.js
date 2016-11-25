// Add external css file
$('head').append("<link href='css/style.css' rel='stylesheet'>");

// Change #myName <h3> tag to <h1>
$('#myName').replaceWith("<h1 id='myName'>" + $('#myName').html() + "</h1>");

// Change src of #myPic
$('#myPic').attr('src', 'resources/vatsal.jpg');

// Add your name
$('#myName').text('Vatsal Joshi');

// Name center align
$('#myName').css('text-align', 'center');

// Image center
$('#myPic').addClass('imgCenter');

// Adjust width of profile pic
$('#myPic').width('100px');

// Change profile pic shape
$('#myPic').addClass('w3-circle');

// Change font size of <p>
$('p').css('font-size', '20px');

// Load your details from a external file
$('#aboutMe').load('resources/about_me.txt');

// Change color of <hr>
$('hr').css('border-top', '1px solid black');

// See website code on button click
$('#showCode').click(function () {
    $('#CodeTextHere').text('');
    $('#CodeTextHere').text($('html').html());
    $('#CodeTextHere').show();
});
// See website text on button click
$('#showText').click(function () {
    $('#CodeTextHere').text('');
    $('#CodeTextHere').text($('html').text());
    $('#CodeTextHere').show();
});

// Toggle #websiteCode
$('#toggleText').on('click', function () {
    $('#CodeTextHere').toggle();
});

// remove class w3-ripple from button
$('button').removeClass('w3-ripple');

// Game action
$('.w3-col').on('click', function () {
    $(this).text('O');
});
$('.w3-col').on('dblclick', function () {
    $(this).text('X');
});

// Reset button
$('#resetGame').click(function () {
    $('.w3-col').text('');
});