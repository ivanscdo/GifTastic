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

    var topics = ["volkswagen", "cooking", "poetry", "radiohead", "kendrick lamar", "the beatles", "olde english bulldogge", "pekingese", "corgi", "simpsons", "futurama", "rick and morty", "pokemon", "final fantasy tactics", "breath of the wild"];

    for ( let i = 0; i < topics.length; i++) {
        var gifButton = $("<button>");
        gifButton.text(topics[i]);
        gifButton.appendTo("#jean-jacket");
        gifButton.attr("class", "btn btn-outline-danger");
        gifButton.attr("id", topics[i]);
    }

    
    

    
// END OF: $( document ).ready(function() {
});