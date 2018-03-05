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

    var topics = ["volkswagen", "cooking", "poetry", "radiohead", "kendrick lamar", "the beatles", "olde english bulldogge", "pekingese", "corgi", "simpsons", "mr. robot", "rick and morty", "pokemon", "chrono trigger", "breath of the wild"];

    for ( let i = 0; i < topics.length; i++) {
        var gifButton = $("<button>");
        gifButton.text(topics[i]);
        gifButton.appendTo("#jean-jacket");
        // gifButton.attr("class", "btn btn-outline-danger gif-button");
        gifButton.attr("class", "btn btn-info btn-space gif-button");
        gifButton.attr("id", topics[i]);
    }

    $(".gif-button").on("click", function(){

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
                // console.log("red wine, success! ", response);
                // console.log(response.data[i].url); 
                var gifURL = response.data[i].url;
                var gifRating = response.data[i].rating;
                // var gifStillURL = response.data[i].images.fixed_height_still.url;
                var gifStillURL = response.data[i].images.fixed_width_still.url;
                // console.log(gifStillURL);
                // console.log(response.data[i].images)
                var gifStill = $("<img>");
                gifStill.attr("src", gifStillURL);
                $(gifStill).prependTo("div#album");
            });

        

        




        // END OF: for(let i = 0; i < 10; i++) {    
        }







    // END OF: $(".gif-button").on("click", function(){
    })



    

    
// END OF: $( document ).ready(function() {
});