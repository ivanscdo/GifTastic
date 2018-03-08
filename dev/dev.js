$( document ).ready(function() {
    // console.log( "ready!" );

    // var queryEx = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=7gCY693a53ZjIQPAsatsvX9jwLXFFcNe&limit=5";
    // 
    // var queryTest = "http://api.giphy.com/v1/gifs/search?q=cat&api_key=7gCY693a53ZjIQPAsatsvX9jwLXFFcNe";
    
    // var queryURL = "http://api.giphy.com";
    // var searchEndPoint = "/v1/gifs/search" + "?rating=r&q=";
    // var randomEndPoint = "/v1/gifs/random" + "?q=";
    // var apiKey = "&api_key=" + "7gCY693a53ZjIQPAsatsvX9jwLXFFcNe";

    // var searchTerm = $("#search-term").val().trim();
    
    // queryURL += [
    //     searchEndPoint +
    //     searchTerm +
    //     apiKey
    // ];
    
    // var dotGet = $.get(queryURL);
    
    // console.log("queryURL: ",  queryURL);
    
    // dotGet.done(function(data) { 
    //     console.log("red wine, success! ", data); 
    // });    

    // $("#search-endpoint").on("click", function(){
    //     event.preventDefault()

    //     var queryURL = "https://api.giphy.com";
    //     var searchEndPoint = "/v1/gifs/search" + "?rating=g&q=";
    //     var apiKey = "&api_key=" + "7gCY693a53ZjIQPAsatsvX9jwLXFFcNe";

    //     var searchTerm = $("#search-term").val().trim();

    //     queryURL += [
    //         searchEndPoint +
    //         searchTerm +
    //         apiKey
    //     ];

    //     var dotGet = $.get(queryURL);

    //     dotGet.then(function(response) { 
    //         console.log("red wine, success! ", response);
    //         console.log(response.data[0].url); 
    //         var gifURL = response.data[0].url
    //         var gifRating = response.data[0].rating;
    //         var gifStill = response.data[0].images.fixed_height_still.url;
    //     });

    //     var gifButton = $("<button>")
    //     gifButton.text(searchTerm);
    //     gifButton.appendTo("#jean-jacket");
    //     gifButton.attr("class", "btn btn-outline-danger");
    //     gifButton.attr("id", searchTerm);
    // });
    
    var topics = ["volkswagen", "cooking", "poetry", "radiohead", "kendrick lamar", "olde english bulldogge", "pekingese", "simpsons", "mr. robot", "rick and morty", "chrono trigger", "breath of the wild", "game of life", "fractals"];

    var counter = {
        "topicAdder": 0,
        "trending": 1
    };

    var trendingBtn = $("<button>");
    trendingBtn.attr("type", "submit");
    trendingBtn.attr("class", "btn btn-success btn-space gif-button");
    trendingBtn.attr("id", "trending-endpoint");
    trendingBtn.text("Trending");
    trendingBtn.appendTo("#jean-jacket");
    

    function topicAdder () {
        
        for ( let i = 0; i < topics.length; i++) {
            
            if ( counter.topicAdder === i) {
            
            var gifButton = $("<button>");
            gifButton.text(topics[i]);
            gifButton.appendTo("#jean-jacket");
            // gifButton.attr("class", "btn btn-outline-danger gif-button");
            gifButton.attr("class", "btn btn-info btn-space gif-button");
            gifButton.attr("id", topics[i]);
            counter.topicAdder++;
            
            // END OF: if ( counter === i) {
            }
            
        // END OF: for ( let i = 0; i < topics.length; i++) {    
        }
        
    // END OF: function topicAdder () {  
    }
    
    topicAdder();
    
    function gifCreator () {
        
        $(".gif-button").on("click", function(){
        // console.log("button clicked!");
    
            var queryURL        = "https://api.giphy.com",
                searchEndPoint  = "/v1/gifs/search",
                searchTerm      = "?q=" + $(this).attr("id"),
                apiKey          = "&api_key=" + "7gCY693a53ZjIQPAsatsvX9jwLXFFcNe",
                rating          = "&rating=g"
                limit           = "&limit=10";
    
            queryURL += [
                searchEndPoint +
                searchTerm +
                apiKey +
                rating +
                limit
            ];
    
            var dotGet = $.get(queryURL);
    
            for(let i = 0; i < 10; i++) {
              
                dotGet.then(function(response) { 
                    // console.log("red wine, success! ", response);
                    // console.log(response.data[i].url); 
                    
                    var stillURL      = response.data[i].images.fixed_height_still.url,
                        animateURL    = response.data[i].images.fixed_height.url,
                        gifRating     = response.data[i].rating,
                        gifHolder     = $("<div class=\"gif-holder\">"),
                        gifElement    = $("<img class=\"rounded\">"),
                        ratingElement = $("<div class=\"text-capitalize rating\">");
                        
                    gifElement.attr("src", stillURL);
                    gifElement.attr("data-still", stillURL );
                    gifElement.attr("data-animate", animateURL );
                    gifElement.attr("data-status", "pause" );
                    
                    ratingElement.text("rating: " + gifRating);
                    
                    $(gifHolder).prependTo("div#album");
                    $(gifElement).prependTo(gifHolder);
                    $(ratingElement).prependTo(gifHolder);
                    
                      
                      // var stillURL = response.data[i].images.fixed_width_still.url;
                      
                      // console.log(stillURL);
                      // console.log(response.data[i].images)
      
                      // var gifHolder = $("<div class=\"gif-holder\">");
    
                      // var gifElement = $("<img>");
                      // gifElement.attr("src", stillURL);
                      // gifElement.attr("data-still", stillURL );
                      // gifElement.attr("data-animate", animateURL );
                      // gifElement.attr("data-status", "pause" );
                      // gifElement.attr("class", searchTerm );
                      
                      // var ratingElement = $("<div class=\"text-capitalize rating\">");
                      // ratingElement.text("rating: " + gifRating);
    
                      // $(gifHolder).prependTo("div#album")
                      // $(ratingElement).prependTo(gifHolder);
                      // $(gifElement).prependTo(gifHolder);


                    
                // END OF: dotGet.then(function(response) { 
                });
    
            // END OF: for(let i = 0; i < 10; i++) {    
            }

        if ( $(window).scrollTop() > 0) {

            window.scrollTo(0,0).animate();

            // $("#album").stop().animate({

            //     marginTop: 0

            // });

        }
            
        // END OF: $(".gif-button").on("click", function(){
        });
        
    //END OF: function gifCreator () {  
    }
    
    gifCreator();
    
    $("#search-endpoint").on("click", function(){
        event.preventDefault()
        
        var searchTerm = $("#search-term").val().trim();
        
        if (searchTerm === "") {
            
          // $("#search-term").attr("placeholder", "Type something dummy");
          return;
            
        } else {
          // $("#search-term").attr("placeholder", "");
            
          topics.push(searchTerm);
          // console.log(topics);
          $("#search-term").val(" ");
  
          topicAdder();
          gifCreator();
            
        }

    // END OF: $("#search-endpoint").on("click", function(){
    });
    
    $('body').on('click','img',function(){
        // console.log("test!");
        var statusCheck = $(this).attr("data-status"),
            play        = $(this).attr("data-animate"),
            pause       = $(this).attr("data-still");
        
        if (statusCheck === "pause" ) {
          
            $(this).attr("src", play );
            $(this).attr("data-status", "play");
            
        } else if ( statusCheck === "play") {
          
            $(this).attr("src", pause );
            $(this).attr("data-status", "pause");
            
        }

    // END OF: $('body').on('click','img',function(){
    });

        // $("#game-of-life").on("click", function(){
        //     event.preventDefault();

        //     console.log("game of life!");

        //     // $("#album").css("background-image", "url(https://giphy.com/embed/2fQGKY07fk7Li)");
        //     // $("#album").css("background-color", "teal");
        //     // $("body").css("background-image", "https://giphy.com/embed/2fQGKY07fk7Li" );
        //     // $("body").css("background-color", "teal");
        //     // document.body.style.backgroundImage = "url('https://giphy.com/embed/2fQGKY07fk7Li')";
        //     $("body").css('background-image', 'url(https://media1.giphy.com/media/jJiyfNbCbxhn2/giphy.gif)');

        // })

    $("#random-endpoint").on("click", function() {
        event.preventDefault();
        // console.log("random button click!");
        
        // var queryURL = "https://api.giphy.com";
        // var randomEndPoint = "/v1/gifs/random" + "?rating=g&tag=";
        // // var tag = $("#search-term").val().trim();
        // var apiKey = "&api_key=" + "7gCY693a53ZjIQPAsatsvX9jwLXFFcNe";
        
        var queryURL        = "https://api.giphy.com",
            randomEndPoint  = "/v1/gifs/random" + "?",
            apiKey          = "&api_key=" + "7gCY693a53ZjIQPAsatsvX9jwLXFFcNe",
            rating          = "&rating=g";         
            

        queryURL += [
            randomEndPoint +
            apiKey +
            rating
            
        ];

        var dotGet = $.get(queryURL);

        dotGet.then(function(response) { 
            // console.log(response);
            // console.log("inside dotGet func");
            
            // var animateURL = response.data.images.fixed_height.url;
            // var stillURL = response.data.images.fixed_height_still.url;
            var randomTitle = response.data.title;
            
            if (randomTitle === "") {
              
              return;
              
            } else {
              
              topics.push(randomTitle);
            
            }
            
            // console.log(randomTitle);

            // var gifHolder = $("<div class=\"gif-holder\">");

            // var gifElement = $("<img>");
            // gifElement.attr("src", stillURL);
            // gifElement.attr("data-still", stillURL );
            // gifElement.attr("data-animate", animateURL );
            // gifElement.attr("data-status", "pause" );
            
            // var ratingElement = $("<div class=\"text-capitalize rating\">");
            // ratingElement.text("rating: g");

            // $(gifHolder).prependTo("div#album")
            // $(ratingElement).prependTo(gifHolder);
            // $(gifElement).prependTo(gifHolder);
            
            topicAdder();
            gifCreator();
            
            
        // END OF: dotGet.then(function(response) { 
        });
                


    // END OF: $("#random-endpoint").on("click", function() {
    });
        
    $(function() {

        var $sidebar   = $("#sidebar"), 
            $window    = $(window),
            offset     = $sidebar.offset(),
            // topPadding = 50;
            topPadding = $("#jean-jacket").height();

  
      $window.scroll(function() {
            // if ($window.scrollTop() > offset.top) {
            if ($window.scrollTop() > 0) {    
              // $sidebar.stop().animate({
              //     marginTop: $window.scrollTop() - offset.top + topPadding
              // });
              $sidebar.css("margin-top", $window.scrollTop() - offset.top + topPadding + 10);
            } else {
              // $sidebar.stop().animate({
              //     marginTop: 0
              // });
              $sidebar.css("margin-top", 0);
            }
            console.log("scroll!");
            console.log("sidebar.offset.top:", $("#sidebar").offset().top);
            console.log("window.scrollTop:", $(window).scrollTop() );
          
        // END OF: $window.scroll(function() {
        });
      
        
    // END OF: $(function() {
    });

    $("#trending-endpoint").on("click", function() {
        event.preventDefault();
        
        var queryURL            = "https://api.giphy.com",
            trendingEndPoint    = "/v1/gifs/trending" + "?",
            apiKey              = "&api_key=" + "7gCY693a53ZjIQPAsatsvX9jwLXFFcNe",
            rating              = "&rating=g",
            // limit               = "&limit=" + parseInt(1 + counter.trending);
            limit               = "&limit=10";
            
        queryURL += [
            trendingEndPoint +
            apiKey +
            rating +
            limit          
        ];

        var dotGet = $.get(queryURL);

        for (let i = 0; i < 10; i++) {

            dotGet.then(function(response) { 
                console.log(response);
                // console.log("title:", response.data[counter.trending].title);

                // var trendingTitle = response.data[counter.trending].title;
                // topics.push(trendingTitle)
                // counter.trending++; 

                var animateURL      = response.data[i].images.fixed_height.url,
                    stillURL        = response.data[i].images.fixed_height_still.url,
                    randomTitle     = response.data[i].title,
                    gifRating       = response.data[i].rating,
                    gifHolder       = $("<div class=\"gif-holder\">"),
                    gifElement      = $("<img>"),
                    ratingElement   = $("<div class=\"text-capitalize rating\">");
                
                gifElement.attr("src", stillURL);
                gifElement.attr("data-still", stillURL );
                gifElement.attr("data-animate", animateURL );
                gifElement.attr("data-status", "pause" );
                
                ratingElement.text("rating: " + gifRating);
                
                $(gifHolder).prependTo("div#album");
                $(gifElement).prependTo(gifHolder);
                $(ratingElement).prependTo(gifHolder);
                
                
                
                topicAdder();
                gifCreator();

                
                
                
            // END OF: dotGet.then(function(response) { 
            });
        }

    //END OF: $("#trending-endpoint").on("click", function() {
    });

    // $("#test").on("click", function(){

    //     var w = $(window).scrollTop();
    //     console.log(w);

    //     if ( w > 0) {

    //         console.log ("w is greater than 0!");
    //         window.scrollTo(0,0);
    //         // console.log( $(window).scrollTop );

    //         // $(window).stop().animate({

    //         // });


    //     }



    // // END OF: $("#test").on("click", function(){
    // });

    
  // END OF: $( document ).ready(function() {
  });