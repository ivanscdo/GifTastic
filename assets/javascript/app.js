$( document ).ready(function() {
    // console.log( "ready!" );
    
    var topics = ["volkswagen", "cooking", "poetry", "radiohead", "kendrick lamar", "olde english bulldogge", "pekingese", "simpsons", "mr. robot", "rick and morty", "metal gear", "breath of the wild", "game of life", "fractals"];

    var counter = {
        "topicAdder": 0,
        // "trending": 1
    };

    var trendingBtn = $("<button>");
    trendingBtn.attr("type", "submit");
    trendingBtn.attr("class", "btn btn-success btn-space");
    trendingBtn.attr("id", "trending-endpoint");
    trendingBtn.text("Trending");
    trendingBtn.appendTo("#jean-jacket");
    

    function topicAdder () {
        
        for ( let i = 0; i < topics.length; i++) {
            
            if ( counter.topicAdder === i) {
            
            var gifButton = $("<button>");

            gifButton.text(topics[i]);
            gifButton.appendTo("#jean-jacket");
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
                    


                    
                // END OF: dotGet.then(function(response) { 
                });
    
            // END OF: for(let i = 0; i < 10; i++) {    
            }
            
            $("html, body").animate({
                scrollTop: 0
            }, 250);
            
        // END OF: $(".gif-button").on("click", function(){
        });
        
    //END OF: function gifCreator () {  
    }
    
    gifCreator();

    
    $("#search-endpoint").on("click", function(){
        event.preventDefault()
        
        var searchTerm = $("#search-term").val().trim();
        
        if (searchTerm === "") {
            
          return;
            
        } else {
            
          topics.push(searchTerm);
          // console.log(topics);
          $("#search-term").val(" ");
  
           
        }

        topicAdder();
        gifCreator();

    // END OF: $("#search-endpoint").on("click", function(){
    });
    
    $("body").on("click","img",function(){
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


    $("#random-endpoint").on("click", function() {
        event.preventDefault();
        // console.log("random button click!");
        
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
            
            var randomTitle = response.data.title;
            
            if (randomTitle === "") {
              
              return;
              
            } else {
              
              topics.push(randomTitle);
            
            }
            
            // console.log(randomTitle);
            
            topicAdder();
            gifCreator();
            
            
        // END OF: dotGet.then(function(response) { 
        });
                


    // END OF: $("#random-endpoint").on("click", function() {
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
                // console.log(response);
                // console.log(i);
                // console.log("title:", response.data[counter.trending].title);

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

                $("html, body").animate({
                    scrollTop: 0
                }, 250);

            // END OF: dotGet.then(function(response) { 
            });

        // END OF: for (let i = 0; i < 10; i++) {
        }

    //END OF: $("#trending-endpoint").on("click", function() {
    });


    $("#play-all").on("click", function (){
        event.preventDefault();

        $("img").each( function(){
            var statusCheck = $(this).attr("data-status"),
                play        = $(this).attr("data-animate"),
                pause       = $(this).attr("data-still");
        
            if (statusCheck === "pause" ) {
            
                $(this).attr("src", play );
                $(this).attr("data-status", "play");
                
            }

        // END OF: $("img").each( function(){
        });


    // END OF: $("#play-all").on("click", function (){
    });

    $("#pause-all").on("click", function (){
        event.preventDefault();



        $("img").each( function(){
            var statusCheck = $(this).attr("data-status"),
                play        = $(this).attr("data-animate"),
                pause       = $(this).attr("data-still");
        
            if ( statusCheck === "play") {
            
                $(this).attr("src", pause );
                $(this).attr("data-status", "pause");
                
            }

        // END OF: $("img").each( function(){
        });


    // END OF: $("#pause-all").on("click", function (){
    });

    $("#open-all").on("click", function(){
        event.preventDefault();


        $(".gif-button").each(function(){

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
                        
                        
                    // END OF: dotGet.then(function(response) { 
                    });
        
                // END OF: for(let i = 0; i < 10; i++) {    
                }
                
                $("html, body").animate({
                    scrollTop: 0
                }, 250);
                
        // END OF: $(".gif-button").each(function(){
        });

    // END OF: $("#open-all").on("click", function(){
    });


    $("#close-all").on("click", function(){
        event.preventDefault();

        $(".gif-holder").remove();

    // END OF: $("#close-all").on("click", function(){
    });

    
  // END OF: $( document ).ready(function() {
  });