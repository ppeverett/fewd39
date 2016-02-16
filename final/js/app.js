// First Attempt - simple
    // $('#hill').on('click', function() {
    //   $('.tweets').append('<a class="twitter-timeline" href="https://twitter.com/HillaryClinton" data-widget-id="699313292494241792">Tweets by @HillaryClinton</a>');
    //   $('.tweets').empty();
    // });

// Second Attempt - using var
    // var ahref = '<a class="twitter-timeline" href="https://twitter.com/HillaryClinton" data-widget-id="699313292494241792">Tweets by @HillaryClinton</a>';

    $('#hill').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline' href='https://twitter.com/HillaryClinton' data-widget-id='699313292494241792'>Tweets by @HillaryClinton</a>");
      // $('div.tweets').empty();
    });

    $('#bern').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline' href='https://twitter.com/berniesanders' data-widget-id='698626932720562176'>Tweets by @BernieSanders</a>");
      // $('div.tweets').empty();
    });

// Test that jquery works on CSS
    // $('#hill').on('click', function(){
    //   $('.tweets').css('background','yellow');
    // });
    // $('#bern').on('click', function(){
    //   $('.tweets').css('background','green');
    // });
