
// Test that jquery works on CSS
    // $('#hill').on('click', function(){
    //   $('.tweets').css('background','yellow');
    // });
    // $('#bern').on('click', function(){
    //   $('.tweets').css('background','green');
    // });

// First Attempt - simple
    // $('#hill').on('click', function() {
    //   $('.tweets').append('<a class="twitter-timeline" href="https://twitter.com/HillaryClinton" data-widget-id="699313292494241792">Tweets by @HillaryClinton</a>');
    //   $('.tweets').empty();
    // });

// Second Attempt - using var
    // var ahref = '<a class="twitter-timeline" href="https://twitter.com/HillaryClinton" data-widget-id="699313292494241792">Tweets by @HillaryClinton</a>';

// Third Attempt - using add attribute method
    // $('#bern').on('click', function() {
    //   $('#twitter-timeline').attr('href', 'https://twitter.com/berniesanders');
    //   $('a.twitter-timeline').attr('data-widget-id','698626932720562176');
    // });

 // Twitter script
    // window.twttr = (function(d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0],
    //     t = window.twttr || {};
    //   if (d.getElementById(id)) return t;
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://platform.twitter.com/widgets.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    //
    //   t._e = [];
    //   t.ready = function(f) {
    //     t._e.push(f);
    //   };
    //
    //   return t;
    // }(document, "script", "twitter-wjs"));



    $('#hill').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline' href='https://twitter.com/HillaryClinton' data-widget-id='699313292494241792'>Tweets by @HillaryClinton</a>");

      twttr.widgets.load();
      // $('div.tweets').empty();
    });

    $('#bern').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline animated slideInRight' href='https://twitter.com/berniesanders' data-widget-id='698626932720562176'>Tweets by @BernieSanders</a>");
      twttr.widgets.load();
      // $('div.tweets').empty();
    });

    $('#bush').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline' href='https://twitter.com/JebBush' data-widget-id='700023551265353728'>Tweets by @JebBush</a>");
      twttr.widgets.load();
      // $('div.tweets').empty();
    });

    $('#cars').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline' href='https://twitter.com/RealBenCarson' data-widget-id='700024126111494144'>Tweets by @RealBenCarson</a>");
      twttr.widgets.load();
      // $('div.tweets').empty();
    });

    $('#cruz').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline' href='https://twitter.com/tedcruz' data-widget-id='699317379650564101'>Tweets by @tedcruz</a>");
      twttr.widgets.load();
      // $('div.tweets').empty();
    });

    $('#kasi').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline' href='https://twitter.com/JohnKasich' data-widget-id='700027072077410304'>Tweets by @JohnKasich</a>");
      twttr.widgets.load();
      // $('div.tweets').empty();
    });

    $('#rubi').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline' href='https://twitter.com/marcorubio' data-widget-i='700027492350857216'>Tweets by @marcorubio</a>");

      twttr.widgets.load();
      // $('div.tweets').empty();
    });

    $('#trum').on('click', function() {
      $('div.tweets').html("<a class='twitter-timeline' href='https://twitter.com/realDonaldTrump' data-widget-id='699321496989093888'>Tweets by @realDonaldTrump</a>");
      
      twttr.widgets.load();
      // $('div.tweets').empty();
    });
