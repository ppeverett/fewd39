// $('#hill').on('click', function() {
//   $('.tweets').append('<a class="twitter-timeline" href="https://twitter.com/HillaryClinton" data-widget-id="699313292494241792">Tweets by @HillaryClinton</a>');
// });

$('#bern').on('click', function(){
  $('.twitter-timeline').attr({
    "href" : "https://twitter.com/berniesanders",
    "data-widget-id" : "698626932720562176"
  });
  $('.tweets').css('background', 'yellow')
});

// $('#hill').on('click', function(){
//   $('.tweets').css('background','yellow');
// });
// $('#bern').on('click', function(){
//   $('.tweets').css('background','green');
// });

// var tweet = '<a class="twitter-timeline" href="https://twitter.com/berniesanders" data-widget-id="698626932720562176">Tweets by @berniesanders</a>'
// var tW = document.createElement('a');
// tW.innerHTML = tweet;
// document.appendChild(tweet);

// var tweets = document.createElement('a');
// var content = '<a class="twitter-timeline" href="https://twitter.com/berniesanders" data-widget-id="698626932720562176">Tweets by @berniesanders</a>'
// tweets.appendChild(content);
// var position = document.getElementsByClassName('tweets');
// position.appendChild(tweets);
