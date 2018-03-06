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
    
    var topics = ["game of life", "volkswagen", "cooking", "poetry", "radiohead", "kendrick lamar", "olde english bulldogge", "pekingese", "simpsons", "mr. robot", "rick and morty", "chrono trigger", "breath of the wild"];

    var counter = 0;
    
    function topicAdder () {
        
        for ( let i = 0; i < topics.length; i++) {
            
            if ( counter === i) {
            
            var gifButton = $("<button>");
            gifButton.text(topics[i]);
            gifButton.appendTo("#jean-jacket");
            // gifButton.attr("class", "btn btn-outline-danger gif-button");
            gifButton.attr("class", "btn btn-info btn-space gif-button");
            gifButton.attr("id", topics[i]);
            counter++;
            
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
    
            var queryURL = "https://api.giphy.com";
            var searchEndPoint = "/v1/gifs/search" + "?rating=g&q=";
            var searchTerm = $(this).attr("id");
            var apiKey = "&api_key=" + "7gCY693a53ZjIQPAsatsvX9jwLXFFcNe";
            var limit = "&limit=10";
    
            queryURL += [
                searchEndPoint +
                searchTerm +
                apiKey +
                limit
            ];
    
            var dotGet = $.get(queryURL);
    
            for(let i = 0; i < 10; i++) {
                dotGet.then(function(response) { 
                    console.log("red wine, success! ", response);
                    // console.log(response.data[i].url); 
                    
                    var animateURL = response.data[i].images.fixed_height.url;
                    var gifRating = response.data[i].rating;
                    var stillURL = response.data[i].images.fixed_height_still.url;
                    // var stillURL = response.data[i].images.fixed_width_still.url;
                    
                    // console.log(stillURL);
                    // console.log(response.data[i].images)
    
                    var gifHolder = $("<div class=\"gif-holder\">");

                    var gifElement = $("<img>");
                    gifElement.attr("src", stillURL);
                    gifElement.attr("data-still", stillURL );
                    gifElement.attr("data-animate", animateURL );
                    gifElement.attr("data-status", "pause" );
                    // gifElement.attr("class", searchTerm );
                    
                    var ratingElement = $("<div class=\"text-capitalize rating\">");
                    ratingElement.text("rating: " + gifRating);

                    $(gifHolder).prependTo("div#album")
                    $(ratingElement).prependTo(gifHolder);
                    $(gifElement).prependTo(gifHolder);
                    
                // END OF: dotGet.then(function(response) { 
                });
    
            // END OF: for(let i = 0; i < 10; i++) {    
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
            
            return;
            
        } else {
            
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
            var statusCheck = $(this).attr("data-status");
            var play = $(this).attr("data-animate");
            var pause = $(this).attr("data-still")
            
            if (statusCheck === "pause" ) {
                $(this).attr("src", play );
                $(this).attr("data-status", "play");
                
            } else if ( statusCheck === "play") {
                $(this).attr("src", pause );
                $(this).attr("data-status", "pause");
                
            }

        // END OF: $('body').on('click','img',function(){
        });
    
    // END OF: $( document ).ready(function() {
    });